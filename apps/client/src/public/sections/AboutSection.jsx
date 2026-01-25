import React, {useRef, useState} from 'react';
import {ChevronDown} from 'lucide-react';

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
          ${isOpen ? "bg-primary text-white" : "bg-gray-100 text-gray-800"}
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
              height: isOpen
                  ? contentRef.current?.scrollHeight
                  : 0,
            }}
            className="transition-all duration-500 ease-in-out overflow-hidden"
        >
          <div
              ref={contentRef}
              className="px-6 py-4 text-gray-600 bg-gray-50 leading-relaxed"
          >
            {children}
          </div>
        </div>
      </div>
  );
}

export default function AboutSection() {
  const [open, setOpen] = useState("history");

  return (
      <section id="about" className="py-20 md:py-40 md:mt-20 bg-white">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold uppercase">About Us</h2>
          <p className="mt-4 text-gray-600">
            Fusce sem dolor, interdum in efficitur at, faucibus nec lorem.
          </p>
          <div className="mt-4 w-28 h-1 bg-primary mx-auto" />
        </div>

        <div className="container-max grid lg:grid-cols-2 gap-14 items-center">
          {/* IMAGE */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                alt="About"
                className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold mb-2">
              Welcome to Edulearn
            </h3>

            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <AccordionItem
                title="Our History"
                isOpen={open === "history"}
                onClick={() =>
                    setOpen(open === "history" ? "" : "history")
                }
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </AccordionItem>

            <AccordionItem
                title="Our Mission"
                isOpen={open === "mission"}
                onClick={() =>
                    setOpen(open === "mission" ? "" : "mission")
                }
            >
              Our mission is to provide accessible, outcome-driven education.
            </AccordionItem>

            <AccordionItem
                title="Our Vision"
                isOpen={open === "vision"}
                onClick={() =>
                    setOpen(open === "vision" ? "" : "vision")
                }
            >
              To build a globally trusted learning ecosystem.
            </AccordionItem>
          </div>
        </div>
      </section>
  );
}
