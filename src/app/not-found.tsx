import Link from 'next/link';
import React from 'react';
import Logo from '@/components/logo';

export default function NotFound() {
  return (
    <main id="not-found" data-testid="not-found">
      <section className="not-found__logo">
        <div className="container">
          <Logo />
        </div>
      </section>

      <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <p>
          We could not find what you looking for,{' '}
          <Link href="/">click here</Link> to go back home
        </p>
      </section>
    </main>
  );
}
