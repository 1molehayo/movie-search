import { type IMovie } from '@/models/movie';
import MovieCard from './movie-card';
import EmptyState from './empty-state';
import Pagination from './pagination';

async function getData(query: { search: string; page?: number }) {
  const { search, page } = query;
  console.log('search: ', search);
  console.log('page: ', page);

  const res = await fetch(
    `${process.env.BASE_URL}/?apikey=${process.env.API_KEY}&s=${search}&page=${page}`,
  );

  if (!res.ok) {
    // This will activate the closest `error.tsx` Error Boundary
    throw new Error(`Failed to fetch data for the search of ${search}`);
  }

  return res.json();
}

export default async function SearchResults({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const data: { Search: IMovie[]; totalResults: number } = query
    ? await getData({ search: query, page: currentPage })
    : { Search: [], totalResults: 0 };

  const { Search, totalResults } = data;

  if (!query) {
    return null;
  }

  return (
    <section
      className={`search-results ${totalResults === 0 ? 'search-results--empty' : ''}`}
    >
      <div className="container">
        <h4>
          Search results for <em>{query}</em>
        </h4>

        <div className="row">
          {Search && Search.length > 0 ? (
            Search.map((movie) => (
              <div
                key={movie.imdbID}
                className="col-md-6 col-lg-4 col-xl-3 mb-5"
              >
                <MovieCard movie={movie} />
              </div>
            ))
          ) : (
            <EmptyState />
          )}
        </div>
        {totalResults > 10 ? (
          <Pagination currentPage={currentPage} totalResults={totalResults} />
        ) : null}
      </div>
    </section>
  );
}
