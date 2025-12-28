import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container-max grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold">About Edulearn</h2>
          <p className="mt-4 text-gray-600">
            We provide quality education resources and community events to help learners achieve their goals.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-primary"/> Expert instructors</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-primary"/> Up-to-date curriculum</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-primary"/> Engaging community</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="w-full aspect-video rounded-xl bg-gray-100 shadow-inner" />
        </div>
      </div>
    </section>
  );
}
