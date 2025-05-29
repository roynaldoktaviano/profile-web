// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Lakukan validasi di sini
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Semua field wajib diisi.' }, { status: 400 });
    }

    // Di sini Anda akan memproses data (misalnya, kirim email menggunakan Nodemailer atau layanan pihak ketiga seperti Resend, simpan ke database, dll.)
    console.log('Form Data Received:', { name, email, message });

    // Contoh: simulasi pengiriman email
    // await sendEmail({ to: 'emailanda@example.com', subject: 'Pesan Portofolio Baru', html: `<p>Dari: <span class="math-inline">\{name\} &lt;</span>{email}&gt;</p><p>${message}</p>` });

    return NextResponse.json({ message: 'Pesan berhasil terkirim!' }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Terjadi kesalahan pada server.' }, { status: 500 });
  }
}