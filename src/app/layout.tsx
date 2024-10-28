import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import Image from "next/image";
import WTSIcon from '@/assets/images/wtsIcon.png'

import "./globals.css";

const InterSans = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dropkiller",
  description: "Accede a los productos ganadores de dropi",
  openGraph: {
    title: 'Dropkiller',
    description: 'Accede a los productos ganadores de dropi'
  },
};

const wtsNumber = '573173171216'
const wtsText = encodeURI('Hola, busco ayuda en la app de *Dropkiller*')

const langTags: {
  [key: string]: string
} = {
  'us': 'en',
  'es': 'es-CO',
  'br': 'pt-BR'
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={langTags[locale]}>
      <head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="./ogImage.png" />
        <meta property="og:image:alt" content="Dropkiller" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1901" />
        <meta property="og:image:height" content="989" />
        <meta httpEquiv="Cache-Control" content="no-store" />
        <link rel="icon" href='/favicon.ico' />
        <script type="module" src="https://unpkg.com/cally" async></script>
        {/* VIDEO TUTORIALS ID */}
        <script src="https://fast.wistia.com/embed/medias/omkkq3l1gm.jsonp" async></script >
        {/* VIDEO TUTORIALS SCRIPT */}
        <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
      </head>
      <body
        className={`${InterSans.className} antialiased w-dvw h-dvh overflow-hidden flex`}
      >
        <a
          href={`https://wa.me/${wtsNumber}?text=${wtsText}`}
          target='_blank'
          rel='noopener noreferrer'
          className="absolute bottom-3 right-3 flex cursor-pointer z-[999999999] hover:drop-shadow-md transition-all"
        >
          <Image src={WTSIcon} width={45} height={45} alt='whatssapp button' />
        </a>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
