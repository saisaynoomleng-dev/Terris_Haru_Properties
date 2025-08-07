import type { Metadata } from 'next';
import './globals.css';
import { Geist, Geist_Mono } from '@/lib/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Terris',
    default: 'Terris',
  },
  description:
    "Terris offers thoughtfully designed modern rooms for rent in a stylish, comfortable setting. Located in Oregon, our property combines contemporary amenities with a cozy, community-focused atmosphere — perfect for students, professionals, and anyone looking for a stress-free living experience. Whether you're seeking short-term flexibility or a longer stay, Terris delivers convenience, comfort, and peace of mind — all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Geist.variable} ${Geist_Mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
