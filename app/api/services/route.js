import { NextResponse } from 'next/server';

const services = [
  {
    id: 1,
    name: 'Essential Refresh',
    price: 60,
    duration: '1-2 hrs',
    description: 'Interior vacuum, wipe down surfaces, exterior hand wash and dry. Perfect for regular maintenance.',
    category: 'basic',
  },
  {
    id: 2,
    name: 'Exterior Excellence',
    price: 150,
    duration: '2-3 hrs',
    description: 'Full exterior detail including clay bar treatment, hand wash, polish, and protective wax.',
    category: 'exterior',
  },
  {
    id: 3,
    name: 'Deluxe Full Detail',
    price: 225,
    duration: '4-5 hrs',
    description: 'Complete interior and exterior detail. Deep clean, steam treatment, and full protection package.',
    category: 'full',
  },
  {
    id: 4,
    name: 'Paint Perfection & Protection',
    price: 500,
    duration: '6-8 hrs',
    description: 'Paint correction, swirl removal, and premium paint sealant. Show-car quality finish.',
    category: 'premium',
  },
  {
    id: 5,
    name: 'Ultimate Ceramic Coating',
    price: 800,
    duration: '1-2 days',
    description: 'Professional ceramic coating application with 2-year protection warranty. The ultimate defense.',
    category: 'elite',
  },
];

const addons = [
  { id: 1, name: 'Undercarriage Cleaning', price: 50 },
  { id: 2, name: 'Headlight Restoration', price: 80 },
  { id: 3, name: 'Pet Hair Removal', price: 25 },
  { id: 4, name: 'Odor Removal & Ozone Treatment', price: 75 },
  { id: 5, name: 'Engine Bay Detail', price: 50 },
];

export async function GET() {
  return NextResponse.json({ services, addons });
}
