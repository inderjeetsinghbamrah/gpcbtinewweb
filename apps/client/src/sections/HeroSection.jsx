import React from 'react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-r from-primary to-blue-600 text-white">
      <div className="container-max py-20 sm:py-28 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Learn. Grow. Succeed.
          </h1>
          <p className="mt-4 text-white/90 max-w-2xl">
            Modern education platform with curated courses, upcoming events, and expert instructors.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#courses" className="px-5 py-3 rounded bg-white text-primary font-semibold hover:opacity-90 transition">Browse Courses</a>
            <a href="#events" className="px-5 py-3 rounded border border-white/40 hover:bg-white/10 transition">Upcoming Events</a>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative w-full aspect-video rounded-xl bg-white/10 backdrop-blur shadow-lg overflow-hidden">
            <div className="absolute inset-0 animate-pulse bg-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
