import { IMovieDetails } from '@/models/movie';
import Image from 'next/image';
import imdb from '@/assets/images/imdb.svg';
import Logo from '@/components/logo';
import Link from 'next/link';

async function getData(movieId: string) {
  console.log('movieId: ', movieId);

  const res = await fetch(
    `${process.env.BASE_URL}/?apikey=${process.env.API_KEY}&i=${movieId}`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch movie');
  }

  return res.json();
}

export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const data: IMovieDetails = await getData(params.id);

  const isInvalidImage = !data.Poster || data?.Poster === 'N/A';
  const rating = data.Ratings[0]?.Value || 'N/A';
  const isMovie = data?.Type && data.Type.toLowerCase() === 'movie';

  return (
    <main id="movie">
      <section className="movie__header">
        <div className="container">
          <Logo />

          <Link href="/" className="movie__button">
            Home
          </Link>
        </div>
      </section>
      <section className="movie__hero">
        <div className="container">
          <div className="movie__image">
            {isInvalidImage ? (
              <div className="movie-card__image--invalid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m16.17 19l-2-2H6l3-4l2.25 3l.82-1.1L5 7.83V19zM7.83 5L19 16.17V5z"
                    opacity={0.3}
                  ></path>
                  <path
                    fill="currentColor"
                    d="M19 5v11.17l2 2V5c0-1.1-.9-2-2-2H5.83l2 2zM2.81 2.81L1.39 4.22L3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61l1.41-1.41zM5 19V7.83l7.07 7.07l-.82 1.1L9 13l-3 4h8.17l2 2z"
                  ></path>
                </svg>
              </div>
            ) : (
              <Image
                src={data.Poster}
                alt={data.Title}
                width="300"
                height="400"
                className="movie__poster"
              />
            )}
          </div>

          <div className="movie__info">
            <h1>{data.Title}</h1>

            <p className="movie__year">
              Year: <strong>{data.Year}</strong>
            </p>
            <p className="movie__genre">
              Genre: <strong>{data.Genre}</strong>
            </p>

            <div className="movie__rating mb-4">
              <Image src={imdb} width="42" height="18" alt="" />
              <strong>{rating}</strong>
            </div>

            <p className="movie__genre">
              Language: <strong>{data.Language}</strong>
            </p>

            <div
              className={`movie__type ${isMovie ? 'movie__type--blue' : 'movie__type--red'}`}
            >
              {data.Type}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
