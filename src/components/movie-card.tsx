'use client';
import { type IMovie } from '@/models/movie';
import Image from 'next/image';

export default function MovieCard({ movie }: { movie: IMovie }) {
  const isSeries = movie?.Type && movie.Type.toLowerCase() === 'series';

  return (
    <div className="card movie-card">
      <div className="movie-card__image">
        <Image alt={movie.Title} src={movie.Poster} fill />
      </div>

      <span
        className={`movie-card__type ${isSeries ? 'movie-card__type--red' : 'movie-card__type--blue'}`}
      >
        {movie.Type}
      </span>
      <span className="movie-card__year">{movie.Year}</span>

      <p className="movie-card__title">{movie.Title}</p>
    </div>
  );
}
