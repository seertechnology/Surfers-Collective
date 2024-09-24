import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// import { useEffect } from 'react';

export default function HeadSection() {


  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    </Head>

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