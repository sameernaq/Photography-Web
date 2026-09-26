/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Packages } from './components/Packages';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ShowreelModal } from './components/ShowreelModal';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [presetService, setPresetService] = useState<string | undefined>(undefined);
  const [presetPackage, setPresetPackage] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    setPresetService(undefined);
    setPresetPackage(undefined);
    setBookingModalOpen(true);
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setPresetService(serviceTitle);
    setPresetPackage(undefined);
    setBookingModalOpen(true);
  };

  const handleSelectPackageForBooking = (packageName: string) => {
    setPresetPackage(packageName);
    setPresetService(undefined);
    setBookingModalOpen(true);
  };

  const handleExplorePortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-[#e2b77a]/30 selection:text-[#fef08a] relative font-sans-clean">
      {/* 3-Zone Navigation Top Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Flow: Home → About → Services → Portfolio → Packages → Testimonials → Contact */}
      <main>
        {/* Section 1: Home (Hero & Cinema Showreel Trigger) */}
        <Hero
          onOpenReel={() => setShowreelOpen(true)}
          onOpenBooking={handleOpenBooking}
        />

        {/* Section 2: About (The Artist & Cinema Philosophy) */}
        <About
          onExplorePortfolio={handleExplorePortfolio}
          onOpenBooking={handleOpenBooking}
        />

        {/* Section 3: Services (Cinematic Disciplines & Tech Specs) */}
        <Services onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* Section 4: Portfolio (Media-First Bento Gallery & Fullscreen Lightbox) */}
        <Portfolio onOpenBooking={handleOpenBooking} />

        {/* Section 5: Packages & Investment Calculator */}
        <Packages onSelectPackageForBooking={handleSelectPackageForBooking} />

        {/* Section 6: Testimonials & Attributable Patron Stories */}
        <Testimonials />

        {/* Section 7: Contact & WhatsApp Consultation */}
        <Contact initialService={presetService} initialPackage={presetPackage} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Showreel Cinema Player Modal */}
      {showreelOpen && (
        <ShowreelModal
          onClose={() => setShowreelOpen(false)}
          onOpenBooking={() => {
            setShowreelOpen(false);
            handleOpenBooking();
          }}
        />
      )}

      {/* Direct Booking & Consultation Drawer Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        presetService={presetService}
        presetPackage={presetPackage}
      />
    </div>
  );
}
