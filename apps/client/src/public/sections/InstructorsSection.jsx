import React from 'react';

const instructors = [
  { id: 'i1', name: 'Alex Kim', role: 'Full-Stack Engineer' },
  { id: 'i2', name: 'Priya Singh', role: 'Data Scientist' },
  { id: 'i3', name: 'Diego Lopez', role: 'UI/UX Designer' },
  { id: 'i4', name: 'Sarah Johnson', role: 'Cloud Architect' },
];

export default function InstructorsSection() {
  return (
    <section id="instructors" className="py-16 bg-gray-50">
      <div className="container-max">
        <h2 className="text-3xl font-bold">Our Instructors</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((i) => (
            <div key={i.id} className="text-center rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mx-auto h-24 w-24 rounded-full bg-gray-200" />
              <h3 className="mt-4 font-semibold">{i.name}</h3>
              <p className="text-sm text-gray-500">{i.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
