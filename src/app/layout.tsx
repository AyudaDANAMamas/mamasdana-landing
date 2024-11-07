import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

const termsAndConditions = [
  {
    label: 'Aviso Legal',
    url: 'aviso-legal'
  },
  {
    label: 'Política de Privacidad',
    url: 'privacidad'
  },
  {
    label: 'Política de Cookies',
    url: 'cookies'
  },
  {
    label: 'Política Redes Sociales',
    url: 'redes-sociales'
  }
];

export const metadata: Metadata = {
  title: 'Mamás DANA',
  description: 'Tu refugio para volver a florecer'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans text-gray-900 antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          {/*<header className="px-4 lg:px-6 h-20 flex items-center border-b border-[#F5C4C0]/20">*/}
          {/*    <Link className="flex items-center justify-center gap-2" href="/">*/}
          {/*        <Image src="/logo.svg" width={60} height={60} alt="Logo"/>*/}
          {/*        <span className="text-xl font-bold text-[#1B365D]">Mamás DANA</span>*/}
          {/*    </Link>*/}
          {/*</header>*/}
          <main className="flex-1">{children}</main>

          <footer className="bg-barro p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4">
              {/* Copyright - Full width on mobile */}
              <p className="text-white text-center text-sm order-2 md:order-1 md:flex-1">
                © 2024 Mamás DANA. Todos los derechos reservados.
              </p>

              {/* Logo - Centered on both mobile and desktop */}
              <div className="order-1 md:order-2">
                <Image
                  src="/sello-isotipo-sinfondo-calma.svg"
                  alt="Flores florecer"
                  width={100}
                  height={1}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Links - Full width and stacked on mobile */}
              <div className="text-white text-sm flex flex-col md:flex-row gap-2 md:gap-4 order-3 md:flex-1 md:justify-end">
                {termsAndConditions.map(term => (
                  <Link key={term.label} href={term.url}>
                    <Button
                      variant="link"
                      className="text-white hover:text-white/80 underline"
                    >
                      {term.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
