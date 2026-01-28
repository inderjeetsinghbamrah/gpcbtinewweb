import React, {useRef, useState} from 'react';
import {ChevronDown} from 'lucide-react';
import {useInstitute} from '@/public/hooks/useInstitute.js';
import DataLoader from '@/components/ui/DataLoader.jsx';
import VideoModal from '@/components/VideoModal.jsx';

/* ---------------- ACCORDION ITEM ---------------- */

function AccordionItem({ title, isOpen, onClick, children }) {
  const contentRef = useRef(null);

  return (
      <div className="border border-gray-200 rounded-md overflow-hidden">
        {/* HEADER */}
        <button
            onClick={onClick}
            className={`
          w-full flex justify-between items-center px-6 py-4 font-semibold
          transition-colors duration-500
          ${
                isOpen
                    ? "bg-instituteBrand text-white"
                    : "bg-gray-100 text-gray-800"
            }
        `}
        >
          {title}
          <ChevronDown
              className={`transition-transform duration-500 ${
                  isOpen ? "rotate-180" : ""
              }`}
          />
        </button>

        {/* BODY */}
        <div
            style={{
              height: isOpen ? contentRef.current?.scrollHeight : 0,
            }}
            className="transition-all duration-500 ease-in-out overflow-hidden"
        >
          <div
              ref={contentRef}
              className="
            px-6 py-4
            bg-gray-50
            text-sm md:text-base
            text-gray-700
            leading-relaxed
          "
          >
            {children}
          </div>
        </div>
      </div>
  );
}

/* ---------------- ABOUT SECTION ---------------- */

export default function AboutSection() {
  const { data: instituteQuery, isLoading, isError } = useInstitute();
  const [open, setOpen] = useState("history");
  const [openVideo, setOpenVideo] = useState(false);

  if (isError) return null;

  return (
      <section id="about" className="py-20 md:py-40 md:mt-20 bg-white">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold uppercase">About Us</h2>

          {isLoading ? (
              <DataLoader />
          ) : (
              <p className="mt-4 text-gray-600">{instituteQuery?.aboutUs}</p>
          )}

          <div className="mt-4 w-28 h-1 bg-instituteBrand mx-auto" />
        </div>

        <div className="container-max grid lg:grid-cols-2 gap-14 items-center">
          {/* ---------------- VIDEO ---------------- */}
          <div
              onClick={() => setOpenVideo(true)}
              className="video-overlay-border relative rounded-xl overflow-hidden shadow-lg cursor-pointer group
            h-[420px] md:h-[480px] lg:h-[540px]"
          >
            <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                alt="Institute Video"
                className="w-full h-full object-cover transition-transform duration-500
              md:group-hover:scale-105"
            />

            <div
                className="
              absolute inset-0 bg-black/40
              opacity-40 md:opacity-0
              md:group-hover:opacity-100
              transition-opacity duration-500
            "
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div
                  className="
                w-20 h-20 bg-instituteBrand rounded-full
                flex items-center justify-center
                scale-100 md:scale-0
                md:group-hover:scale-100
                transition-transform duration-500
                shadow-xl
              "
              >
                <svg
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Mobile label */}
            <div
                className="
              absolute bottom-4 left-1/2 -translate-x-1/2
              bg-black/70 text-white text-sm px-4 py-1 rounded-full
              md:hidden
            "
            >
              ▶ Watch Video
            </div>
          </div>

          {/* ---------------- CONTENT ---------------- */}
          <div className="space-y-4">
            <h3 className="text-3xl text-center font-bold mb-2">
              Welcome to{" "}
              {isLoading ? <DataLoader /> : instituteQuery?.shortName}
            </h3>

            <p className="text-gray-600 mb-6">
              Empowering students through quality education, innovation,
              and strong academic values.
            </p>

            <AccordionItem
                title="Our History"
                isOpen={open === "history"}
                onClick={() => setOpen(open === "history" ? "" : "history")}
            >
              Our institution was founded with a vision to deliver accessible,
              affordable, and outcome-driven education.
            </AccordionItem>

            <AccordionItem
                title="Our Mission"
                isOpen={open === "mission"}
                onClick={() => setOpen(open === "mission" ? "" : "mission")}
            >
              To nurture skilled professionals through modern teaching
              methodologies and industry-aligned curriculum.
            </AccordionItem>

            <AccordionItem
                title="Our Vision"
                isOpen={open === "vision"}
                onClick={() => setOpen(open === "vision" ? "" : "vision")}
            >
              To become a nationally recognized institution known for academic
              excellence and student success.
            </AccordionItem>

            {/* ---------------- PRINCIPAL MESSAGE ---------------- */}

            <AccordionItem
                title="Principal's Message"
                isOpen={open === "principal_message"}
                onClick={() =>
                    setOpen(
                        open === "principal_message" ? "" : "principal_message"
                    )
                }
            >
              <div className="bg-slate-50 rounded-xl p-5">
                <div className="flex flex-col md:flex-row gap-5 items-start">
                  {/* PHOTO */}
                  <div className="w-full md:w-[160px] flex-shrink-0 flex justify-center md:justify-start">
                    <div className="bg-white rounded-xl border shadow-sm p-4 text-center w-full md:w-auto">
                      <img
                          src="/principal.jpg"
                          alt="Principal"
                          className="w-[110px] h-[140px] mx-auto object-cover rounded-md"
                      />

                      <p className="mt-3 text-sm font-semibold text-gray-800">
                        Principal
                      </p>
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="flex-1 w-full">
                    <div
                        className="
                      max-h-[200px]
                      md:max-h-[210px]
                      overflow-y-auto
                      pr-3
                    "
                    >
                      <p className="whitespace-pre-line">
                        {instituteQuery?.principalMessage}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionItem>
          </div>
        </div>

        {/* ---------------- VIDEO MODAL ---------------- */}
        <VideoModal
            isOpen={openVideo}
            onClose={() => setOpenVideo(false)}
            videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        />
      </section>
  );
}
