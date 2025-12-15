import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchEvents } from '../services/events.js';

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents()
      .then(setEvents)
      .catch((e) => setError(e?.message || 'Failed to load'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container-max py-10">
      <h1 className="text-3xl font-bold">All Events</h1>
      {loading && <p className="mt-6 text-gray-600">Loading events…</p>}
      {error && <p className="mt-6 text-red-600">{error}</p>}
      {!loading && !error && (
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <Link key={e.id} to={`/events/${e.id}`} className="group rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 rounded-lg bg-gray-100 mb-4 overflow-hidden">
                {e.imageUrl && (<img src={e.imageUrl} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />)}
              </div>
              <h3 className="font-semibold">{e.title}</h3>
              <p className="text-sm text-gray-500">{new Date(e.date).toLocaleString()}</p>
              <p className="mt-2 text-gray-600">{e.description}</p>
              <span className="inline-block mt-4 text-primary text-sm">View details →</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
