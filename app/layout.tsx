import * as React from 'react';
import './globals.css'
import { Navigation } from './Navigation.component';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
