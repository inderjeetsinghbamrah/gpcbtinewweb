import React from "react";
import HeroBackgroundSlider from "@/components/HeroBackgroundSlider.jsx";
import { useInstitute } from "../hooks/useInstitute";
import DataLoader from "@/components/ui/DataLoader.jsx";

export default function HeroSection() {
  const { data: instituteQuery, isLoading, isError } = useInstitute();

  if (isError) return null;

  return (
      <section
          id="hero"
          className="
        relative overflow-hidden text-white
        min-h-[70vh] md:min-h-[60vh] lg:min-h-[65vh]
      "
      >
        {/* BACKGROUND SLIDER */}
        <HeroBackgroundSlider />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-[1]" />

        {/* CONTENT */}
        <div className="relative z-10 container-max flex items-center py-16 md:py-20">
          <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">

            {/* LEFT — HERO TEXT */}
            <div className="flex-1 text-center md:text-left order-1">

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Learn. Grow. Succeed.
              </h1>

              <p className="mt-3 text-lg sm:text-xl text-orange-300 font-medium">
                Shaping Students for Tomorrow
              </p>

              {isLoading ? (
                  <div className="mt-6">
                    <DataLoader />
                  </div>
              ) : (
                  <p className="mt-5 max-w-lg mx-auto md:mx-0 text-white/90 leading-relaxed text-sm sm:text-base md:text-lg text-justify">
                    {instituteQuery?.aboutInstitute}
                  </p>
              )}

              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <a
                    href="#courses"
                    className="px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition"
                >
                  Browse Courses
                </a>

                <a
                    href="#events"
                    className="px-6 py-3 rounded-lg border border-white/40 text-white hover:bg-white/10 transition"
                >
                  Upcoming Events
                </a>
              </div>
            </div>

            {/* RIGHT — NEWS CARD */}
            <div className="w-full md:flex-1 max-w-md md:max-w-none order-2 md:order-1">
              <div
                  className="
                relative w-full
                aspect-[16/11] sm:aspect-[16/10]
                rounded-2xl
                bg-white/15
                backdrop-blur-xl
                shadow-2xl
                border border-white/25
                overflow-hidden
              "
              >
                {/* GLASS LAYERS */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />

                <div className="relative z-10 h-full p-6 flex flex-col">

                  {/* HEADER */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                    <h3 className="text-lg font-semibold tracking-wide">
                      Latest News
                    </h3>
                  </div>

                  {/* AUTO SCROLL */}
                  <div className="relative flex-1 overflow-hidden">
                    <div className="news-scroll flex flex-col gap-3">

                      {[
                        {
                          title: "Admissions Open 2026",
                          desc: "Applications started from Jan 18",
                        },
                        {
                          title: "National Level Seminar",
                          desc: "Scheduled on Feb 02, 2026",
                        },
                        {
                          title: "Merit Scholarship Program",
                          desc: "Apply before Jan 30",
                        },
                        {
                          title: "Admissions Open 2026",
                          desc: "Applications started from Jan 18",
                        },
                        {
                          title: "National Level Seminar",
                          desc: "Scheduled on Feb 02, 2026",
                        },
                        {
                          title: "Merit Scholarship Program",
                          desc: "Apply before Jan 30",
                        },
                      ].map((item, i) => (
                          <div
                              key={i}
                              className="rounded-lg px-4 py-3 bg-white/10 border border-white/20"
                          >
                            <p className="text-sm font-semibold text-white">
                              {item.title}
                            </p>
                            <p className="text-xs text-white/70 mt-1 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                      ))}
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="mt-4">
                    <a
                        href="#news"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 transition"
                    >
                      View all updates →
                    </a>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
}
