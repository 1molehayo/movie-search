'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function EmptyState() {
  const pathname = usePathname();
  const { replace } = useRouter();

  const clearSearch = () => {
    replace(pathname);
  };

  return (
    <div className="empty-state">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 48 48"
      >
        <defs>
          <mask id="ipTMovie0">
            <g fill="none" stroke="#fff" strokeWidth={4}>
              <path
                fill="#555"
                strokeLinejoin="round"
                d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
              ></path>
              <path
                fill="#fff"
                strokeLinejoin="round"
                d="M24 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-9-9a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm18 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"
              ></path>
              <path strokeLinecap="round" d="M24 44h20"></path>
            </g>
          </mask>
        </defs>
        <path
          fill="currentColor"
          d="M0 0h48v48H0z"
          mask="url(#ipTMovie0)"
        ></path>
      </svg>

      <p>No results for your search!</p>
      <p>
        Please{' '}
        <span role="button" onClick={clearSearch}>
          try again
        </span>
      </p>
    </div>
  );
}
