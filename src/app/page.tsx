import Image from 'next/image';
import background from '@/assets/images/movie-bg.jpeg';
import Logo from '@/components/logo';
import SearchBar from '@/components/search-bar';
import { Suspense } from 'react';
import Loading from '@/components/loading';
import SearchResults from '@/components/search-results';

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main id="home" data-testid="home">
      <section className="home--bg">
        <Image src={background} alt="movie-bg" priority />
      </section>

      <section className="home__search">
        <div className="container">
          <Logo />
          <SearchBar />
        </div>
      </section>

      <Suspense key={query + currentPage} fallback={<Loading />}>
        <SearchResults query={query} currentPage={currentPage} />
      </Suspense>
    </main>
  );
}
