import '@/styles/globals.css';

export const metadata = {
  title: 'botanical_glow-beauty-biophilic_minimalism',
  description: 'botanical_glow-beauty-biophilic_minimalism',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
