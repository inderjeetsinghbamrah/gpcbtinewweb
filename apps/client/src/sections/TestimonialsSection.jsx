import React from 'react';

const testimonials = [
  { id: 't1', name: 'Maya', quote: 'The courses are well structured and easy to follow.' },
  { id: 't2', name: 'Ethan', quote: 'Events helped me network and land an internship.' },
  { id: 't3', name: 'Zara', quote: 'Amazing instructors with real-world experience.' },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16">
      <div className="container-max">
        <h2 className="text-3xl font-bold">What Students Say</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <p className="italic text-gray-700">“{t.quote}”</p>
              <p className="mt-4 font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
