import Head from 'next/head';
// import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
// import Link from 'next/link'
import React from 'react';

export default function Layout({
  children
} : {
  children: React.ReactNode
}) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="description"
            content="Web site created using create-react-app"
            />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <title>React App</title>
      </Head>
      <main>{children}</main>
    </div>
  )
}