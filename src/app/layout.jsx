import localFont from 'next/font/local';

import './globals.css';

const circularWeb = localFont({
  variable: '--font-circular-web',
  src: '../../public/fonts/circularweb-book.woff2',
});

const general = localFont({
  variable: '--font-general',
  src: '../../public/fonts/general.woff2',
});

const robertMedium = localFont({
  variable: '--font-robert-medium',
  src: '../../public/fonts/robert-medium.woff2',
});

const robertRegular = localFont({
  variable: '--font-robert-regular',
  src: '../../public/fonts/robert-regular.woff2',
});

const zentry = localFont({
  variable: '--font-zentry',
  src: '../../public/fonts/zentry-regular.woff2',
});

export const metadata = {
  title: 'Zentry',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${circularWeb.variable} ${general.variable} ${robertMedium.variable} ${robertRegular.variable} ${zentry.variable} font-general antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
