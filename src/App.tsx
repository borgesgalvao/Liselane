/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { AboutStudio } from './components/AboutStudio';
import { MeetingScheduler } from './components/MeetingScheduler';
import { BlogSection } from './components/BlogSection';
import { Testimonials } from './components/Testimonials';
import { LocationMap } from './components/LocationMap';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [scheduledProjectTitle, setScheduledProjectTitle] = useState<string | undefined>();
  const [scheduledCategory, setScheduledCategory] = useState<string | undefined>();

  const handleOpenSchedule = (projectTitle?: string, category?: string) => {
    if (projectTitle) setScheduledProjectTitle(projectTitle);
    if (category) setScheduledCategory(category);
    
    const element = document.getElementById('agendamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F7] text-[#1D1E1C] antialiased">
      {/* Sticky Header Navigation */}
      <Navbar onOpenSchedule={() => handleOpenSchedule()} activeSection="hero" />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section with Studio Philosophy & Featured Work */}
        <Hero onOpenSchedule={() => handleOpenSchedule()} />

        {/* 2. Selected Architecture & Interior Portfolio with Interactive Modal */}
        <Portfolio 
          onScheduleForProject={(title, category) => handleOpenSchedule(title, category)} 
        />

        {/* 3. The Studio, Founding Partners & BIM Methodology */}
        <AboutStudio />

        {/* 4. Integrated Online Meeting Scheduler (Presencial & Online) */}
        <MeetingScheduler 
          initialProjectTitle={scheduledProjectTitle}
          initialCategory={scheduledCategory}
        />

        {/* 5. Design & Architectural Trends Blog */}
        <BlogSection onScheduleMeeting={() => handleOpenSchedule()} />

        {/* 6. Client Testimonials & Proven Credibility */}
        <Testimonials />

        {/* 7. Interactive Location Map with Layers & Sede Info */}
        <LocationMap />

        {/* 8. Intuitive Contact Form, Channels & FAQ */}
        <ContactSection />
      </main>

      {/* Footer with Social Networks & Legal Information */}
      <Footer />

      {/* Direct Floating WhatsApp Contact */}
      <FloatingWhatsApp />
    </div>
  );
}
