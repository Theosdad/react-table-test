import React from 'react';
import { Link } from 'react-router-dom';
import { StyledUl } from './styles';

export const PaginationList = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

    const range = (start, end) => {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    let showPages = [];
    const pagesToShow = 5;
    const halfPagesToShow = Math.floor(pagesToShow / 2);

    if (totalPages <= pagesToShow) {
        showPages = pageNumbers;
    } else if (currentPage <= halfPagesToShow) {
        showPages = range(1, pagesToShow);
    } else if (currentPage > totalPages - halfPagesToShow) {
        showPages = range(totalPages - pagesToShow + 1, totalPages);
    } else {
        showPages = range(currentPage - halfPagesToShow, currentPage + halfPagesToShow);
    }

    return (
        <StyledUl>
            {showPages.map((number) => (
                <li key={number} style={{ margin: '0 5px' }}>
                    <Link
                        to={`/${number}`}
                        style={{
                            color: currentPage === number ? '#7ebc3c' : '#474955',
                        }}
                        onClick={() => onPageChange(number)}
                    >
                        {number}
                    </Link>
                </li>
            ))}
        </StyledUl>
    );
};
