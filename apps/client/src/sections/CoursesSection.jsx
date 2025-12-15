import React from 'react';
import { Link } from 'react-router-dom';

const sampleCourses = [
  { id: 'c1', title: 'Intro to Programming', level: 'Beginner' },
  { id: 'c2', title: 'Full-Stack Web Dev', level: 'Intermediate' },
  { id: 'c3', title: 'Data Structures & Algorithms', level: 'Advanced' },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container-max">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold">Popular Courses</h2>
          <Link to="/courses" className="text-primary hover:underline">View all</Link>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleCourses.map((c) => (
            <div key={c.id} className="group rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 rounded-lg bg-gray-100 mb-4 group-hover:scale-[1.01] transition-transform" />
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-gray-500">{c.level}</p>
              <button className="mt-4 text-sm text-white bg-primary px-4 py-2 rounded hover:opacity-90 transition">Enroll</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
