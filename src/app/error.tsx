'use client';
import Link from 'next/link';
import Logo from '@/components/logo';

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <main id="not-found" data-testid="error">
      <section className="not-found__logo">
        <div className="container">
          <Logo />
        </div>
      </section>

      <section className="not-found">
        <h1 className="not-found__title">Oops</h1>
        <p>{error.message}</p>

        <div>
          <Link href="/">Try again</Link>
        </div>
      </section>
    </main>
  );
}
