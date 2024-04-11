'use client';
import Logo from '@/components/logo';

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <main id="not-found" data-testid="error">
      <section className="not-found container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Logo />

            <h1 className="not-found__title">Oops</h1>
            <p>{error.message}</p>

            <div>
              <a href="/">Try again</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
