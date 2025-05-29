// app/(sections)/contact.tsx (atau components/ContactForm.tsx)
"use client";

import React, { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(null);

    try {
      const response = await fetch('/api/contact', { // Mengarah ke Route Handler
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage(result.message || 'Pesan berhasil terkirim!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setResponseMessage(result.message || 'Terjadi kesalahan saat mengirim pesan.');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage('Tidak dapat terhubung ke server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Hubungi Saya</h2>
        <p className="text-lg text-slate-600 mb-12 max-w-xl mx-auto">
          Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya.
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl">
          <div className="mb-6">
            <label htmlFor="name" className="block text-slate-700 text-sm font-bold mb-2 text-left">Nama</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-slate-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-slate-700 text-sm font-bold mb-2 text-left">Email</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-slate-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-slate-700 text-sm font-bold mb-2 text-left">Pesan</label>
            <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-slate-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
          </div>
          <button type="submit" disabled={isSubmitting}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 disabled:opacity-50">
            {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
          </button>
          {responseMessage && (
            <p className={`mt-4 text-sm ${responseMessage.includes('berhasil') ? 'text-green-600' : 'text-red-600'}`}>
              {responseMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
export default Contact;