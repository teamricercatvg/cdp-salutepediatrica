import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Salute Pediatrica Globale | Tor Vergata',
  description: 'Il nuovo sito dei corsi di perfezionamento di Tor Vergata sulla salute pediatrica globale, dedicati a medici e infermieri. Sito in preparazione.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body>{children}</body></html>;
}
