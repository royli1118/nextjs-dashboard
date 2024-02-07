<<<<<<< HEAD
import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';

=======
>>>>>>> 84451a4fbf34d1b2ae89dce2a10a04cc4e1d09b6
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={`${inter.className} antialiased`}>{children}</body>
=======
      <body>{children}</body>
>>>>>>> 84451a4fbf34d1b2ae89dce2a10a04cc4e1d09b6
    </html>
  );
}
