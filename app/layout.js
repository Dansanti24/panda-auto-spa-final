import './globals.css';

export const metadata = {
  title: 'Panda Auto Spa | Premium Car Detailing in Allentown, PA',
  description: 'Professional auto detailing services in Allentown, PA. From basic washes to ceramic coatings.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
