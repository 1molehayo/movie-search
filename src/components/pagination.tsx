'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
// import { useState } from 'react';
import ReactPaginate from 'react-paginate';

export default function Pagination({
  currentPage,
  totalResults,
}: {
  currentPage: number;
  totalResults: number;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const itemsPerPage = 10;
  const pageCount = Math.ceil(totalResults / itemsPerPage);

  // console.log('pageCount: ', pageCount);
  // console.log('totalResults: ', totalResults);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePageClick = (event: { selected: any }) => {
    // console.log('new-page', event.selected + 1);
    const params = new URLSearchParams(searchParams);

    params.set('page', `${event.selected + 1}`);

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="pagination-wrapper">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        forcePage={currentPage - 1}
      />
    </div>
  );
}
