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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>Library</title>
      </Head>
      <main>{children}</main>
    </div>
  )
}