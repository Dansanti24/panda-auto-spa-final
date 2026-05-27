import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import Booking from '../../../models/Booking';

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, email, phone, service, date, time } = body;
    if (!name || !email || !phone || !service || !date || !time) {
      return NextResponse.json({ error: 'All required fields must be filled' }, { status: 400 });
    }
    const booking = await Booking.create(body);
    return NextResponse.json({ message: 'Booking confirmed!', booking }, { status: 201 });
  } catch (err) {
    console.error('BOOKING ERROR:', err.message, err.stack);
    return NextResponse.json({ error: 'Failed to create booking', details: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const bookings = await Booking.find().sort({ createdAt: -1 });
    return NextResponse.json(bookings);
  } catch (err) {
    console.error('GET BOOKINGS ERROR:', err.message);
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
  }
}
