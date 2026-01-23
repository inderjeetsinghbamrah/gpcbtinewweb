                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {fetchEvent} from '../services/events.js';

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvent(id)
      .then(setEvent)
      .catch((e) => setError(e?.message || 'Failed to load'))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="container-max py-10">
      <Link to="/events" className="text-primary hover:underline">← Back to events</Link>
      {loading && <p className="mt-6 text-gray-600">Loading…</p>}
      {error && <p className="mt-6 text-red-600">{error}</p>}
      {event && (
        <div className="mt-6 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold">{event.title}</h1>
            <p className="mt-2 text-gray-500">{new Date(event.date).toLocaleString()} · {event.location}</p>
            <div className="mt-6">
              <p className="leading-7 text-gray-700">{event.description}</p>
            </div>
          </div>
          <div>
            <div className="rounded-xl border overflow-hidden">
              <div className="h-56 bg-gray-100">
                {event.imageUrl && <img src={event.imageUrl} alt="" className="w-full h-full object-cover" />}
              </div>
              <div className="p-4">
                <button className="w-full bg-primary text-white py-2 rounded hover:opacity-90 transition">Register</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
