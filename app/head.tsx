import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';
import type { Metadata } from 'next'
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// import { useEffect } from 'react';

export const metadata: Metadata = {
  title: 'Surfers Collective',
  description: 'Surfers Collective',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://surferscollective.com',
    title: 'Surfers Collective',
    description: 'Surfers Collective',
  },
}

export default function HeadSection() {


  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <Script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      strategy="beforeInteractive"
    />
    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />

    <Script id='modalInit' strategy="lazyOnload">
      {`
        $(document).ready(function() {
          $('#contactModule').appendTo('body');
        });
      `}
      {`
        $(document).ready(function() {
          $('#bookModule').appendTo('body');
        });
      `}
    </Script>
  </>
  )
}