import React from 'react';

export default function CoursesPage() {
  return (
    <div className="container-max py-10">
      <h1 className="text-3xl font-bold">Courses</h1>
      <p className="mt-4 text-gray-600">This page showcases available courses. You can expand this to fetch from an API later.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-40 bg-gray-100 rounded mb-4" />
            <h3 className="font-semibold">Sample Course {i + 1}</h3>
            <p className="text-sm text-gray-500">Beginner</p>
            <button className="mt-4 text-sm text-white bg-primary px-4 py-2 rounded hover:opacity-90 transition">Enroll</button>
          </div>
        ))}
      </div>
    </div>
  );
}
