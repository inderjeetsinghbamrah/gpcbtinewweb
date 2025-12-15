import React from 'react';
import AboutSection from '../sections/AboutSection.jsx';
import CoursesSection from '../sections/CoursesSection.jsx';
import EventsSection from '../sections/EventsSection.jsx';
import InstructorsSection from '../sections/InstructorsSection.jsx';
import TestimonialsSection from '../sections/TestimonialsSection.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import Header from "../ui/components/Header.jsx";
import HeroSection from "../sections/HeroSection.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <EventsSection />
      <InstructorsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
