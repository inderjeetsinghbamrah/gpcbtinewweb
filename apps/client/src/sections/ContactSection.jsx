import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container-max grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-gray-600">Have questions about courses or events? Send us a message.</p>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input className="mt-1 w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="How can we help?" />
            </div>
            <button type="button" className="bg-primary text-white px-5 py-2 rounded hover:opacity-90 transition">Send</button>
          </form>
        </div>
        <div>
          <div className="w-full h-80 rounded-xl bg-gray-200" />
          <div className="mt-6 text-gray-700">
            <p><strong>Email:</strong> info@domain.com</p>
            <p className="mt-1"><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p className="mt-1"><strong>Address:</strong> 123 Learning Ave, Knowledge City</p>
          </div>
        </div>
      </div>
    </section>
  );
}
