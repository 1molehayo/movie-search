import React from 'react';
import Logo from '@/components/logo';

export default function NotFound() {
  return (
    <main id="not-found" data-testid="not-found">
      <section className="not-found container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Logo />

            <h1 className="not-found__title">404</h1>

            <p>
              We could not find what you looking for, <a href="/">click here</a>{' '}
              to go back home
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
