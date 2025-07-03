'use client';

import React, { useState, useEffect } from 'react';

const careerTimeline = [
  {
    year: '2015',
    title: 'Perusahaan Berdiri',
    description: 'Didirikan di Surabaya dengan fokus awal pada konstruksi dan pameran lokal.',
  },
  {
    year: '2017',
    title: 'Proyek Nasional Pertama',
    description: 'Bekerja sama dengan BUMN untuk furnitur dan interior event nasional.',
  },
  {
    year: '2020',
    title: 'Ekspansi ke Jakarta',
    description: 'Membuka kantor cabang Jakarta untuk menjangkau klien strategis.',
  },
  {
    year: '2023',
    title: 'Digitalisasi Sistem',
    description: 'Menerapkan ERP dan sistem internal berbasis web.',
  },
];

const CareerJourneySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  // Disable scroll saat modal aktif
  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selected]);

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Karir di Perusahaan</h2>

        {/* Garis Timeline */}
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-500 transform -translate-y-1/2"></div>

          <div className="flex justify-between relative z-10">
            {careerTimeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative w-1/4 text-center cursor-pointer"
                  onClick={() => setSelected(index)}
                >
                  {/* Teks */}
                  <div
                    className={`absolute ${
                      isEven ? '-top-16' : 'top-10'
                    } left-1/2 transform -translate-x-1/2`}
                  >
                    <p className="text-sm font-medium text-gray-700">{item.year}</p>
                    <p className="text-xs text-gray-500">{item.title}</p>
                  </div>

                  {/* Titik */}
                  <div className="w-5 h-5 bg-white border-4 border-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 hover:scale-110 transition"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal */}
        {selected !== null && (
          <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
              {/* Modal Box */}
              <div
                className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full relative animate-modal"
                style={{ animation: 'scaleFadeIn 0.3s ease-out' }}
              >
                {/* Tombol Close */}
                <button
                  className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl"
                  onClick={() => setSelected(null)}
                >
                  &times;
                </button>

                {/* Konten */}
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  {careerTimeline[selected].year} – {careerTimeline[selected].title}
                </h3>
                <p className="text-gray-700">{careerTimeline[selected].description}</p>
              </div>
            </div>

            {/* Keyframe animasi */}
            <style jsx>{`
              @keyframes scaleFadeIn {
                from {
                  opacity: 0;
                  transform: scale(0.95);
                }
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }
            `}</style>
          </>
        )}
      </div>
    </section>
  );
};

export default CareerJourneySection;
