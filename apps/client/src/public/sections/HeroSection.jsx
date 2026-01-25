import React from 'react';
import HeroBackgroundSlider from '@/components/HeroBackgroundSlider.jsx';
import {useInstitute} from '../hooks/useInstitute';
import DataLoader from '@/components/ui/DataLoader.jsx';

const NEWS = [
  { title: "Admissions Open 2026", desc: "Applications started from Jan 18" },
  { title: "National Level Seminar", desc: "Scheduled on Feb 02, 2026" },
  { title: "Merit Scholarship Program", desc: "Apply before Jan 30" },
];

const FEATURES = [
  { title: "Trending Courses", desc: "Explore industry focused programs", icon: "🎯" },
  { title: "Books & Library", desc: "Extensive academic resources", icon: "📚" },
  { title: "Certified Teachers", desc: "Qualified and experienced faculty", icon: "👨‍🏫" },
  { title: "Certification", desc: "Recognized academic credentials", icon: "🎓" },
];

export default function HeroSection() {
  const { data: instituteQuery, isLoading, isError } = useInstitute();
  if (isError) return null;

  return (
      <>
        {/* ================= HERO ================= */}
        <section
            id="hero"
            className="
          relative overflow-visible text-white
          min-h-[50vh] md:min-h-[65vh]
        "
        >
          <HeroBackgroundSlider />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20 z-[1]" />

          <div className="relative z-10 container-max py-14 md:py-20">
            <div className="flex flex-col md:flex-row items-center gap-12">

              {/* LEFT */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                  Learn. Grow. Succeed.
                </h1>

                <p className="mt-3 text-orange-400 font-semibold">
                  Shaping Students for Tomorrow
                </p>

                {isLoading ? (
                    <div className="mt-6"><DataLoader /></div>
                ) : (
                    <p className="mt-5 max-w-2xl mx-auto md:mx-0 text-white/90 leading-relaxed text-sm sm:text-base md:text-lg text-justify">
                      {instituteQuery?.aboutInstitute}
                    </p>
                )}

                <div className="mt-8 flex justify-center md:justify-start gap-4">
                  <a
                      href="#courses"
                      className="px-6 py-3 rounded-lg bg-orange-500 font-semibold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition"
                  >
                    Browse Courses
                  </a>
                  <a
                      href="#events"
                      className="px-6 py-3 rounded-lg border border-white/40 hover:bg-white/10 transition"
                  >
                    Upcoming Events
                  </a>
                </div>
              </div>

              {/* DESKTOP NEWS */}
              <div className="hidden md:flex flex-1">
                <NewsCard />
              </div>
            </div>
          </div>

          {/* DESKTOP FEATURES */}
          <div className="hidden md:block absolute left-0 right-0 -bottom-24 z-40">
            <FeatureGrid />
          </div>
        </section>

        {/* ================= MOBILE NEWS ================= */}
        <div className="block md:hidden container-max px-4 mt-6">
          <div className="relative rounded-2xl bg-black/40">
            <MobileNewsSection />
          </div>
        </div>

        {/* ================= MOBILE FEATURES ================= */}
        <div className="block md:hidden container-max mt-6">
          <FeatureStack />
        </div>
      </>
  );
}

/* ================= NEWS (SCROLLING) ================= */

function ScrollingNews() {
  return (
      <div className="relative h-52 overflow-hidden">
        <div className="news-scroll flex flex-col gap-3">
          {[...NEWS, ...NEWS].map((n, i) => (
              <div
                  key={i}
                  className="rounded-lg px-4 py-3 bg-white/10 border border-white/20"
              >
                <p className="text-sm font-semibold text-white">{n.title}</p>
                <p className="text-xs text-white/70 mt-1">{n.desc}</p>
              </div>
          ))}
        </div>
      </div>
  );
}

function NewsCard() {
  return (
      <div className="w-full rounded-2xl bg-white/15 backdrop-blur-xl border border-white/25 p-6 shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
          <h3 className="text-lg font-semibold">Latest News</h3>
        </div>

        <ScrollingNews />

        <a
            href="#news"
            className="inline-block mt-4 text-sm font-semibold text-orange-400 hover:text-orange-300"
        >
          View all updates →
        </a>
      </div>
  );
}

function MobileNewsSection() {
  return (
      <section className="rounded-2xl bg-white/18 backdrop-blur-xl border border-white/30 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        <div className="relative z-10 p-5">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
            <h3 className="text-lg font-semibold text-white">Latest News</h3>
          </div>

          <ScrollingNews />

          <a
              href="#news"
              className="inline-block mt-4 text-sm font-semibold text-orange-400 hover:text-orange-300"
          >
            View all updates →
          </a>
        </div>
      </section>
  );
}

/* ================= FEATURES ================= */

function FeatureGrid() {
  return (
      <div className="container-max grid grid-cols-4 gap-14 md:gap-6">
        {FEATURES.map((f, i) => (
            <FeatureCard key={i} {...f} />
        ))}
      </div>
  );
}

function FeatureStack() {
  return (
      <div className="flex flex-col gap-8">
        {FEATURES.map((f, i) => (
            <FeatureCard key={i} {...f} />
        ))}
      </div>
  );
}

function FeatureCard({ title, desc, icon }) {
  return (
      <div
          className="
        group relative rounded-xl
        px-5 pt-12 pb-6 mt-6 md:mt-0
        bg-[#1f1f1f] shadow-xl
        transition-all duration-300 ease-out
        hover:-translate-y-3
        hover:bg-orange-500
        hover:shadow-2xl hover:shadow-orange-500/30
      "
      >
        <div
            className="
          absolute -top-7 left-1/2 -translate-x-1/2
          w-14 h-14 rounded-full bg-orange-500
          flex items-center justify-center
          text-white text-2xl
          shadow-lg shadow-orange-500/30
          transition-all duration-300
          group-hover:bg-white group-hover:text-orange-500
        "
        >
          {icon}
        </div>

        <h4 className="mt-4 font-semibold text-white">{title}</h4>
        <p className="mt-1 text-sm text-white/70 group-hover:text-white/90">
          {desc}
        </p>
      </div>
  );
}
