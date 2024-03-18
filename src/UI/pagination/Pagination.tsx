import React, { FC } from 'react';
import { usePagination } from '../../hooks/usePagination';

interface PaginationProps {
  totalPages: number;
  page: number;
  changePage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ totalPages, page, changePage }) => {
  let pagesArray: number[] = usePagination(totalPages);
  return (
    <section className="page-wrapper">
      {pagesArray.map((p: number) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? 'page page__current' : 'page'}
        >
          {p}
        </span>
      ))}
    </section>
  );
};

export default Pagination;
