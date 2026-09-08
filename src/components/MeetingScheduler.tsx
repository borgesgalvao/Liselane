import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Video, 
  CheckCircle2, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  FileText, 
  Download, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Coffee,
  Sparkles,
  Trash2
} from 'lucide-react';
import { MeetingBooking, MeetingType } from '../types';
import { STUDIO_INFO } from '../data/mockData';

interface MeetingSchedulerProps {
  initialProjectTitle?: string;
  initialCategory?: string;
}

export const MeetingScheduler: React.FC<MeetingSchedulerProps> = ({
  initialProjectTitle,
  initialCategory,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [meetingType, setMeetingType] = useState<MeetingType>('online');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('14:30');
  
  // Briefing form state
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [projectType, setProjectType] = useState('Residencial de Alto Padrão');
  const [projectStage, setProjectStage] = useState('Já possuo o terreno / lote');
  const [estimatedArea, setEstimatedArea] = useState('400 - 700 m²');
  const [budgetRange, setBudgetRange] = useState('R$ 2.000.000 a R$ 4.000.000');
  const [notes, setNotes] = useState('');

  // Completed booking
  const [completedBooking, setCompletedBooking] = useState<MeetingBooking | null>(null);

  // Saved bookings from localStorage
  const [savedBookings, setSavedBookings] = useState<MeetingBooking[]>([]);
  const [showSavedBookings, setShowSavedBookings] = useState(false);

  // Current calendar month view helper
  const today = new Date();
  const [calendarMonth, setCalendarMonth] = useState<Date>(new Date(today.getFullYear(), today.getMonth(), 1));

  // Load saved bookings from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('liselane_arch_meetings') || localStorage.getItem('vertice_arch_meetings');
      if (stored) {
        setSavedBookings(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to parse saved meetings', e);
    }
  }, []);

  // Update when initialProjectTitle changes
  useEffect(() => {
    if (initialProjectTitle) {
      setNotes(`Interesse em projeto com linguagem similar a: ${initialProjectTitle}`);
      if (initialCategory) {
        if (initialCategory === 'residencial') setProjectType('Residencial de Alto Padrão');
        if (initialCategory === 'interiores') setProjectType('Design de Interiores');
        if (initialCategory === 'corporativo') setProjectType('Corporativo & Comercial');
        if (initialCategory === 'paisagismo') setProjectType('Paisagismo & Urbanismo');
      }
      // Scroll to scheduler
      const el = document.getElementById('agendamento');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [initialProjectTitle, initialCategory]);

  // Set default selected date to 2 days from now (excluding Sunday)
  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    if (d.getDay() === 0) d.setDate(d.getDate() + 1); // If Sunday, set to Monday
    const dateStr = d.toISOString().split('T')[0];
    setSelectedDate(dateStr);
  }, []);

  // Available time slots
  const timeSlots = [
    { time: '09:30', period: 'Manhã' },
    { time: '11:00', period: 'Manhã' },
    { time: '14:00', period: 'Tarde' },
    { time: '15:30', period: 'Tarde' },
    { time: '17:00', period: 'Tarde' },
    { time: '18:30', period: 'Noite (Online)' },
  ];

  // Helper to generate days for current month view
  const generateMonthDays = () => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    // Blank padding before first day
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null);
    }
    // Days
    for (let d = 1; d <= daysInMonth; d++) {
      const dateObj = new Date(year, month, d);
      const isPast = dateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const isSunday = dateObj.getDay() === 0;
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      days.push({
        dayNumber: d,
        dateStr,
        isPast,
        isSunday,
        isToday: dateStr === today.toISOString().split('T')[0],
      });
    }
    return days;
  };

  const handleMonthPrev = () => {
    setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1));
  };

  const handleMonthNext = () => {
    setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1));
  };

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !clientPhone) {
      alert('Por favor, preencha nome, e-mail e telefone para confirmar a reunião.');
      return;
    }

    const meetingLabels: Record<MeetingType, string> = {
      online: 'Videoconferência Online (Google Meet HD)',
      presencial: 'Reunião Presencial no Estúdio (Contagem - MG)',
      visita_tecnica: 'Visita Técnica no Terreno / Imóvel'
    };

    const protocol = `LISE-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking: MeetingBooking = {
      id: Date.now().toString(),
      protocol,
      clientName,
      clientEmail,
      clientPhone,
      meetingType,
      meetingTypeLabel: meetingLabels[meetingType],
      date: selectedDate,
      time: selectedTime,
      projectType,
      projectStage,
      estimatedArea,
      budgetRange,
      notes,
      createdAt: new Date().toISOString(),
      status: 'confirmada'
    };

    const updated = [newBooking, ...savedBookings];
    setSavedBookings(updated);
    try {
      localStorage.setItem('liselane_arch_meetings', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }

    setCompletedBooking(newBooking);
    setStep(4);
  };

  const handleDeleteBooking = (id: string) => {
    const updated = savedBookings.filter(b => b.id !== id);
    setSavedBookings(updated);
    localStorage.setItem('liselane_arch_meetings', JSON.stringify(updated));
  };

  // Generate .ICS file download for Apple/Google/Outlook calendar
  const downloadIcsFile = (booking: MeetingBooking) => {
    const startDate = booking.date.replace(/-/g, '');
    const startTime = booking.time.replace(':', '') + '00';
    
    // Duration: 1 hour 30 min
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Liselane Arquitetura//Agendamentos//PT-BR',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `SUMMARY:Reunião de Arquitetura: ${booking.projectType} - Liselane Arquitetura e design`,
      `DESCRIPTION:Consulta com a arquiteta Liselane. Protocolo: ${booking.protocol}. Modalidade: ${booking.meetingTypeLabel}.`,
      `LOCATION:${booking.meetingType === 'presencial' ? STUDIO_INFO.address.street + ', ' + STUDIO_INFO.address.city + ' - ' + STUDIO_INFO.address.state : 'Google Meet (Link enviado por email)'}`,
      `DTSTART:${startDate}T${startTime}`,
      `STATUS:CONFIRMED`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `reuniao-liselane-${booking.protocol}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Google Calendar URL Generator
  const getGoogleCalendarUrl = (booking: MeetingBooking) => {
    const startIso = `${booking.date.replace(/-/g, '')}T${booking.time.replace(':', '')}00`;
    const title = encodeURIComponent(`Reunião de Arquitetura: ${booking.projectType} | Liselane Arquitetura`);
    const details = encodeURIComponent(`Reunião com Liselane Arquitetura e design.\nProtocolo: ${booking.protocol}\nModalidade: ${booking.meetingTypeLabel}\nTelefone: ${STUDIO_INFO.phone}\nE-mail: ${STUDIO_INFO.email}`);
    const location = encodeURIComponent(booking.meetingType === 'presencial' ? `${STUDIO_INFO.address.street}, ${STUDIO_INFO.address.city} - MG` : 'Google Meet HD');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${startIso}&details=${details}&location=${location}`;
  };

  return (
    <section id="agendamento" className="py-20 lg:py-28 bg-[#F4F1EA] border-b border-[#E0DBD0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C48B5E] font-semibold mb-2">
            <CalendarIcon className="w-4 h-4 text-[#C48B5E]" />
            <span>Sistema Integrado de Agendamento</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#141413]">
            Agende uma Reunião com Liselane
          </h2>
          <p className="text-sm sm:text-base text-[#5C5952] mt-3 font-sans-body">
            Converse diretamente com a arquiteta Liselane sobre seu terreno, programa de necessidades e cronograma de obra. Escolha entre atendimento presencial em nossa sede em Contagem - MG ou por videoconferência.
          </p>

          {/* Toggle "Minhas Reuniões" if any exist */}
          {savedBookings.length > 0 && (
            <div className="mt-4">
              <button
                onClick={() => setShowSavedBookings(!showSavedBookings)}
                className="text-xs font-semibold text-[#141413] underline underline-offset-4 hover:text-[#C48B5E] cursor-pointer"
              >
                {showSavedBookings ? '← Voltar ao Formulário de Agendamento' : `Visualizar Reuniões Agendadas (${savedBookings.length})`}
              </button>
            </div>
          )}
        </div>

        {/* View: Saved Bookings List */}
        {showSavedBookings ? (
          <div className="bg-white rounded-xs p-6 sm:p-8 border border-[#D9D4C7] shadow-sm max-w-4xl">
            <h3 className="font-serif-display text-2xl text-[#141413] mb-6">
              Suas Reuniões Marcadas
            </h3>

            <div className="space-y-4">
              {savedBookings.map((b) => (
                <div 
                  key={b.id}
                  className="p-5 bg-[#FAF9F7] rounded-xs border border-[#E8E4DB] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 bg-[#E8E4DB] text-[#141413] rounded-xs">
                        {b.protocol}
                      </span>
                      <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        Confirmada
                      </span>
                    </div>

                    <div className="font-semibold text-[#141413] text-sm sm:text-base">
                      {b.projectType} • {b.meetingTypeLabel}
                    </div>

                    <div className="text-xs text-[#6B6860] flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="w-3.5 h-3.5 text-[#C48B5E]" />
                        {b.date.split('-').reverse().join('/')} às {b.time}
                      </span>
                      <span>Cliente: {b.clientName}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => downloadIcsFile(b)}
                      title="Baixar convite .ICS para o calendário"
                      className="p-2 text-xs bg-white hover:bg-[#F2EFE8] text-[#141413] border border-[#D9D4C7] rounded-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>.ICS</span>
                    </button>

                    <a
                      href={getGoogleCalendarUrl(b)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-xs bg-[#141413] hover:bg-[#2B2A28] text-white rounded-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#C48B5E]" />
                      <span>Google Agenda</span>
                    </a>

                    <button
                      onClick={() => handleDeleteBooking(b.id)}
                      className="p-2 text-[#A8A49C] hover:text-red-600 rounded-xs transition-colors cursor-pointer"
                      title="Cancelar/remover agendamento"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          
          /* The 4-Step Interactive Scheduling App */
          <div className="bg-white rounded-xs border border-[#D9D4C7] shadow-xl overflow-hidden max-w-5xl">
            
            {/* Step Progress Bar */}
            <div className="grid grid-cols-4 border-b border-[#E8E4DB] bg-[#FAF9F7] text-xs font-semibold">
              {[
                { s: 1, title: '1. Formato da Reunião' },
                { s: 2, title: '2. Data & Horário' },
                { s: 3, title: '3. Briefing do Projeto' },
                { s: 4, title: '4. Confirmação' },
              ].map((item) => (
                <div
                  key={item.s}
                  className={`py-3.5 px-3 text-center border-r last:border-r-0 border-[#E8E4DB] transition-colors ${
                    step === item.s 
                      ? 'bg-white text-[#141413] border-b-2 border-b-[#C48B5E]' 
                      : step > item.s 
                        ? 'text-emerald-700 bg-emerald-50/40' 
                        : 'text-[#8C8880]'
                  }`}
                >
                  <span className="hidden sm:inline">{item.title}</span>
                  <span className="sm:hidden">{item.s}</span>
                </div>
              ))}
            </div>

            <div className="p-6 sm:p-10">
              
              {/* STEP 1: Modalidade de Reunião */}
              {step === 1 && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  <div>
                    <h3 className="font-serif-display text-2xl sm:text-3xl text-[#141413]">
                      Qual formato de atendimento você prefere?
                    </h3>
                    <p className="text-sm text-[#636059] mt-1 font-sans-body">
                      Oferecemos total flexibilidade para clientes locais e de outras regiões.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    
                    {/* Option 1: Online */}
                    <div
                      id="opt-meeting-online"
                      onClick={() => setMeetingType('online')}
                      className={`p-6 rounded-xs border-2 cursor-pointer transition-all flex flex-col justify-between ${
                        meetingType === 'online'
                          ? 'border-[#141413] bg-[#FAF9F7] shadow-md'
                          : 'border-[#E5E1D8] hover:border-[#B5B0A4] bg-white'
                      }`}
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xs bg-[#141413] text-[#FAF9F7] flex items-center justify-center mb-4">
                          <Video className="w-6 h-6 text-[#C48B5E]" />
                        </div>
                        <h4 className="font-semibold text-base text-[#141413]">
                          Reunião Online HD
                        </h4>
                        <p className="text-xs text-[#636059] mt-2 leading-relaxed">
                          Via Google Meet com compartilhamento de tela interativo. Ideal para primeira sondagem ou clientes de outras cidades e exterior.
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-[#ECE8DE] flex items-center justify-between text-xs text-[#858178]">
                        <span>Duração: 60 - 90 min</span>
                        <span className="font-medium text-[#141413]">Sem deslocamento</span>
                      </div>
                    </div>

                    {/* Option 2: Presencial */}
                    <div
                      id="opt-meeting-presencial"
                      onClick={() => setMeetingType('presencial')}
                      className={`p-6 rounded-xs border-2 cursor-pointer transition-all flex flex-col justify-between ${
                        meetingType === 'presencial'
                          ? 'border-[#141413] bg-[#FAF9F7] shadow-md'
                          : 'border-[#E5E1D8] hover:border-[#B5B0A4] bg-white'
                      }`}
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xs bg-[#141413] text-[#FAF9F7] flex items-center justify-center mb-4">
                          <Coffee className="w-6 h-6 text-[#C48B5E]" />
                        </div>
                        <h4 className="font-semibold text-base text-[#141413]">
                          Presencial no Estúdio
                        </h4>
                        <p className="text-xs text-[#636059] mt-2 leading-relaxed">
                          Em nossa sede em Contagem - MG. Inclui amostrário tátil de materiais (rochas, madeiras nobres, acabamentos) e café especial mineiro.
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-[#ECE8DE] flex items-center justify-between text-xs text-[#858178]">
                        <span>Contagem - MG</span>
                        <span className="font-medium text-[#141413]">Estacionamento fácil</span>
                      </div>
                    </div>

                    {/* Option 3: Visita Técnica */}
                    <div
                      id="opt-meeting-visita"
                      onClick={() => setMeetingType('visita_tecnica')}
                      className={`p-6 rounded-xs border-2 cursor-pointer transition-all flex flex-col justify-between ${
                        meetingType === 'visita_tecnica'
                          ? 'border-[#141413] bg-[#FAF9F7] shadow-md'
                          : 'border-[#E5E1D8] hover:border-[#B5B0A4] bg-white'
                      }`}
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xs bg-[#141413] text-[#FAF9F7] flex items-center justify-center mb-4">
                          <MapPin className="w-6 h-6 text-[#C48B5E]" />
                        </div>
                        <h4 className="font-semibold text-base text-[#141413]">
                          Visita Técnica in loco
                        </h4>
                        <p className="text-xs text-[#636059] mt-2 leading-relaxed">
                          Visita preliminar ao lote ou imóvel existente para avaliação de topografia, insolação, vegetação e potencial construtivo.
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-[#ECE8DE] flex items-center justify-between text-xs text-[#858178]">
                        <span>No seu terreno/obra</span>
                        <span className="font-medium text-[#141413]">Sob consulta</span>
                      </div>
                    </div>

                  </div>

                  {/* Next Step Button */}
                  <div className="pt-6 flex justify-end">
                    <button
                      id="step1-next"
                      onClick={() => setStep(2)}
                      className="px-8 py-3.5 bg-[#141413] hover:bg-[#2B2A28] text-[#FAF9F7] text-xs uppercase tracking-widest font-semibold rounded-xs transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span>Avançar para Data & Horário</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Data e Horário */}
              {step === 2 && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-serif-display text-2xl sm:text-3xl text-[#141413]">
                        Escolha a Data e o Horário Desejado
                      </h3>
                      <p className="text-sm text-[#636059] mt-1">
                        Horários disponíveis em tempo real na agenda dos arquitetos sócios.
                      </p>
                    </div>

                    <div className="text-xs px-3 py-1.5 rounded-xs bg-[#F2EFE8] text-[#54514A] border border-[#DDD8CE]">
                      Fuso horário: <span className="font-semibold">Horário de Brasília (GMT-3)</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Calendar Month Grid */}
                    <div className="lg:col-span-7 bg-[#FAF9F7] p-5 rounded-xs border border-[#E5E1D8]">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-semibold text-sm text-[#141413] uppercase tracking-wider">
                          {calendarMonth.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
                        </span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={handleMonthPrev}
                            className="p-1.5 hover:bg-[#EAE5DA] rounded-xs transition-colors cursor-pointer"
                            aria-label="Mês anterior"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={handleMonthNext}
                            className="p-1.5 hover:bg-[#EAE5DA] rounded-xs transition-colors cursor-pointer"
                            aria-label="Próximo mês"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Weekday headers */}
                      <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-[#8C8880] mb-2 uppercase">
                        <span>Dom</span>
                        <span>Seg</span>
                        <span>Ter</span>
                        <span>Qua</span>
                        <span>Qui</span>
                        <span>Sex</span>
                        <span>Sáb</span>
                      </div>

                      {/* Day cells */}
                      <div className="grid grid-cols-7 gap-1">
                        {generateMonthDays().map((day, idx) => {
                          if (!day) {
                            return <div key={`empty-${idx}`} className="h-10" />;
                          }

                          const isSelected = selectedDate === day.dateStr;
                          const isDisabled = day.isPast || day.isSunday;

                          return (
                            <button
                              key={day.dateStr}
                              disabled={isDisabled}
                              onClick={() => setSelectedDate(day.dateStr)}
                              className={`h-10 text-xs font-medium rounded-xs transition-all flex flex-col items-center justify-center relative ${
                                isSelected
                                  ? 'bg-[#141413] text-[#FAF9F7] font-bold shadow-xs'
                                  : isDisabled
                                    ? 'text-[#C7C3B9] cursor-not-allowed bg-transparent'
                                    : 'hover:bg-[#EAE5DA] text-[#2E2B25] bg-white border border-[#EAE5DA]'
                              }`}
                            >
                              <span>{day.dayNumber}</span>
                              {day.isToday && !isSelected && (
                                <span className="w-1 h-1 rounded-full bg-[#C48B5E] absolute bottom-1" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#E8E4DB] flex items-center justify-between text-[11px] text-[#7A776F]">
                        <span>• Fechado aos domingos</span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-xs bg-[#141413]" /> Selecionado
                        </span>
                      </div>
                    </div>

                    {/* Time Slots Column */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#141413] mb-3">
                          <Clock className="w-3.5 h-3.5 text-[#C48B5E]" />
                          <span>Horários Livres para {selectedDate ? selectedDate.split('-').reverse().join('/') : 'Data selecionada'}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          {timeSlots.map((slot) => {
                            const isTimeSelected = selectedTime === slot.time;
                            return (
                              <button
                                key={slot.time}
                                onClick={() => setSelectedTime(slot.time)}
                                className={`p-3 rounded-xs border text-left transition-all cursor-pointer ${
                                  isTimeSelected
                                    ? 'border-[#141413] bg-[#141413] text-white'
                                    : 'border-[#D9D4C7] bg-[#FAF9F7] hover:border-[#141413] text-[#2E2B25]'
                                }`}
                              >
                                <div className="text-sm font-semibold">{slot.time}</div>
                                <div className={`text-[10px] ${isTimeSelected ? 'text-[#C48B5E]' : 'text-[#827E75]'}`}>
                                  {slot.period}
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        <div className="mt-6 p-4 bg-[#F2EFE8] rounded-xs border border-[#DFDAD0] text-xs text-[#524F48] space-y-1">
                          <div className="font-semibold text-[#141413] flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-[#C48B5E]" />
                            <span>Reserva Garantida</span>
                          </div>
                          <p>
                            Ao finalizar, o horário ficará bloqueado e você receberá o convite com link de acesso por e-mail e WhatsApp.
                          </p>
                        </div>
                      </div>

                      {/* Navigation buttons */}
                      <div className="pt-6 flex items-center justify-between border-t border-[#EAE5DA] mt-6">
                        <button
                          onClick={() => setStep(1)}
                          className="px-5 py-3 text-xs uppercase tracking-wider font-semibold text-[#57544C] hover:text-[#141413] flex items-center gap-1.5 cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>Voltar</span>
                        </button>

                        <button
                          id="step2-next"
                          disabled={!selectedDate}
                          onClick={() => setStep(3)}
                          className="px-8 py-3.5 bg-[#141413] hover:bg-[#2B2A28] disabled:opacity-50 text-[#FAF9F7] text-xs uppercase tracking-widest font-semibold rounded-xs transition-colors flex items-center gap-2 cursor-pointer"
                        >
                          <span>Avançar para Briefing</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* STEP 3: Briefing do Projeto & Contato */}
              {step === 3 && (
                <form onSubmit={handleCompleteBooking} className="space-y-8 animate-in fade-in duration-200">
                  <div>
                    <h3 className="font-serif-display text-2xl sm:text-3xl text-[#141413]">
                      Conte-nos Sobre Seus Planos
                    </h3>
                    <p className="text-sm text-[#636059] mt-1">
                      Essas informações nos ajudam a preparar uma apresentação personalizada antes da nossa conversa.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Client Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#2E2B25] mb-2">
                        Nome Completo *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#8C8880] absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="Ex: Dra. Mariana Vasconcellos"
                          className="w-full pl-10 pr-4 py-3 bg-[#FAF9F7] border border-[#D9D4C7] rounded-xs text-sm text-[#141413] focus:border-[#141413] focus:outline-hidden"
                        />
                      </div>
                    </div>

                    {/* Client Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#2E2B25] mb-2">
                        E-mail de Contato *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#8C8880] absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          required
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          placeholder="Ex: mariana@empresa.com.br"
                          className="w-full pl-10 pr-4 py-3 bg-[#FAF9F7] border border-[#D9D4C7] rounded-xs text-sm text-[#141413] focus:border-[#141413] focus:outline-hidden"
                        />
                      </div>
                    </div>

                    {/* Client Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#2E2B25] mb-2">
                        WhatsApp / Celular com DDD *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#8C8880] absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="(11) 98765-4321"
                          className="w-full pl-10 pr-4 py-3 bg-[#FAF9F7] border border-[#D9D4C7] rounded-xs text-sm text-[#141413] focus:border-[#141413] focus:outline-hidden"
                        />
                      </div>
                    </div>

                    {/* Project Category */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#2E2B25] mb-2">
                        Tipologia de Projeto
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full px-4 py-3 bg-[#FAF9F7] border border-[#D9D4C7] rounded-xs text-sm text-[#141413] focus:border-[#141413] focus:outline-hidden"
                      >
                        <option value="Residencial de Alto Padrão">Residencial Novo (Casa / Villa)</option>
                        <option value="Design de Interiores & Reforma">Design de Interiores & Reforma de Apartamento</option>
                        <option value="Corporativo & Comercial">Sede Corporativa / Comercial / Loja</option>
                        <option value="Paisagismo & Urbanismo">Paisagismo e Parque Privado</option>
                        <option value="Estudo de Viabilidade">Estudo de Viabilidade de Terreno</option>
                      </select>
                    </div>

                    {/* Property Stage */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#2E2B25] mb-2">
                        Estágio do Imóvel / Terreno
                      </label>
                      <select
                        value={projectStage}
                        onChange={(e) => setProjectStage(e.target.value)}
                        className="w-full px-4 py-3 bg-[#FAF9F7] border border-[#D9D4C7] rounded-xs text-sm text-[#141413] focus:border-[#141413] focus:outline-hidden"
                      >
                        <option value="Já possuo o terreno / lote">Já possuo o terreno / lote</option>
                        <option value="Já possuo imóvel construído para reforma">Já possuo imóvel construído para reforma</option>
                        <option value="Estou negociando o terreno e quero assessoria">Estou negociando o terreno e quero assessoria</option>
                        <option value="Em fase de prospecção de compra">Em fase de prospecção de compra</option>
                      </select>
                    </div>

                    {/* Estimated Area */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#2E2B25] mb-2">
                        Metragem Estimada
                      </label>
                      <select
                        value={estimatedArea}
                        onChange={(e) => setEstimatedArea(e.target.value)}
                        className="w-full px-4 py-3 bg-[#FAF9F7] border border-[#D9D4C7] rounded-xs text-sm text-[#141413] focus:border-[#141413] focus:outline-hidden"
                      >
                        <option value="Até 250 m²">Até 250 m²</option>
                        <option value="250 a 500 m²">250 a 500 m²</option>
                        <option value="500 a 1.000 m²">500 a 1.000 m²</option>
                        <option value="Acima de 1.000 m²">Acima de 1.000 m²</option>
                      </select>
                    </div>

                  </div>

                  {/* Notes / Aspirations */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#2E2B25] mb-2">
                      Desejos específicos, referências ou dúvidas (opcional)
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ex: Gostamos de bastante iluminação natural, concreto aparente e integração com piscina e jardim..."
                      className="w-full p-3.5 bg-[#FAF9F7] border border-[#D9D4C7] rounded-xs text-sm text-[#141413] focus:border-[#141413] focus:outline-hidden"
                    />
                  </div>

                  {/* Summary Strip */}
                  <div className="p-4 bg-[#F2EFE8] rounded-xs border border-[#DDD8CE] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#524E46] gap-2">
                    <div>
                      <span className="font-semibold text-[#141413]">Resumo da Reserva:</span>{' '}
                      {selectedDate.split('-').reverse().join('/')} às {selectedTime} •{' '}
                      <span className="capitalize">{meetingType.replace('_', ' ')}</span>
                    </div>
                    <span className="text-[#87837A]">Consulta inicial sem compromisso</span>
                  </div>

                  {/* Navigation & Submit */}
                  <div className="pt-4 flex items-center justify-between border-t border-[#EAE5DA]">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-3 text-xs uppercase tracking-wider font-semibold text-[#57544C] hover:text-[#141413] flex items-center gap-1.5 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Voltar</span>
                    </button>

                    <button
                      id="submit-booking"
                      type="submit"
                      className="px-8 py-4 bg-[#141413] hover:bg-[#2B2A28] text-[#FAF9F7] text-xs uppercase tracking-widest font-semibold rounded-xs transition-all duration-300 flex items-center gap-2.5 shadow-md cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C48B5E]" />
                      <span>Confirmar Agendamento</span>
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 4: Confirmação & Protocolo */}
              {step === 4 && completedBooking && (
                <div className="space-y-8 text-center max-w-2xl mx-auto py-6 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#C48B5E]">
                      Agendamento Confirmado com Sucesso
                    </span>
                    <h3 className="font-serif-display text-3xl sm:text-4xl text-[#141413] mt-1">
                      Aguardamos Você, {completedBooking.clientName.split(' ')[0]}!
                    </h3>
                    <p className="text-sm text-[#615E56] mt-2 font-sans-body">
                      Enviamos os detalhes para <span className="font-semibold text-[#141413]">{completedBooking.clientEmail}</span> e entraremos em contato via WhatsApp com o link da sala.
                    </p>
                  </div>

                  {/* Ticket Summary Box */}
                  <div className="bg-[#FAF9F7] p-6 rounded-xs border border-[#D9D4C7] text-left space-y-3.5 shadow-xs">
                    <div className="flex items-center justify-between border-b border-[#E8E4DA] pb-3">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#8A867D] block">Protocolo</span>
                        <span className="font-mono text-sm font-bold text-[#141413]">{completedBooking.protocol}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-wider text-[#8A867D] block">Status</span>
                        <span className="text-xs font-semibold text-emerald-700">Confirmado</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-[#8A867D] block mb-0.5">Data & Horário:</span>
                        <span className="font-semibold text-[#141413]">
                          {completedBooking.date.split('-').reverse().join('/')} às {completedBooking.time}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#8A867D] block mb-0.5">Formato:</span>
                        <span className="font-semibold text-[#141413]">{completedBooking.meetingTypeLabel}</span>
                      </div>
                      <div>
                        <span className="text-[#8A867D] block mb-0.5">Projeto:</span>
                        <span className="font-semibold text-[#141413]">{completedBooking.projectType}</span>
                      </div>
                      <div>
                        <span className="text-[#8A867D] block mb-0.5">Local:</span>
                        <span className="font-semibold text-[#141413]">
                          {completedBooking.meetingType === 'presencial' ? 'Av. João César de Oliveira, 1400 - Contagem, MG' : 'Google Meet HD'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Calendar Integration Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      id="download-ics-button"
                      onClick={() => downloadIcsFile(completedBooking)}
                      className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-[#F2EFE8] text-[#141413] border border-[#D9D4C7] text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-[#C48B5E]" />
                      <span>Baixar Convite de Calendário (.ICS)</span>
                    </button>

                    <a
                      id="add-google-calendar"
                      href={getGoogleCalendarUrl(completedBooking)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 bg-[#141413] hover:bg-[#2B2A28] text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4 text-[#C48B5E]" />
                      <span>Adicionar ao Google Agenda</span>
                    </a>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setStep(1);
                        setCompletedBooking(null);
                      }}
                      className="text-xs text-[#7A766F] hover:text-[#141413] underline underline-offset-4 cursor-pointer"
                    >
                      Fazer outro agendamento
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
