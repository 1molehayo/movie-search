'use client';
import { type IMovie } from '@/models/movie';
import Image from 'next/image';

export default function MovieCard({ movie }: { movie: IMovie }) {
  const isMovie = movie?.Type && movie.Type.toLowerCase() === 'movie';

  const isInvalidImage = !movie.Poster || movie?.Poster === 'N/A';

  return (
    <div className="card movie-card">
      <div className="movie-card__image">
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
          <Image alt={movie.Title} src={movie.Poster} fill />
        )}
      </div>

      <span
        className={`movie-card__type ${isMovie ? 'movie-card__type--blue' : 'movie-card__type--red'}`}
      >
        {movie.Type}
      </span>
      <span className="movie-card__year">{movie.Year}</span>

      <p className="movie-card__title">{movie.Title}</p>
    </div>
  );
}
