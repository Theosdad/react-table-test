import React, { useEffect, useState } from 'react';
import { TableDigit, TableHeader } from './styles';
import { Pagination } from '../pagination/pagination';
import { useNavigate, useParams } from 'react-router-dom';
import { Search } from '../../ui/search/search';

export const Table = () => {
    const { pageNumber } = useParams();
    const navigate = useNavigate();
    const tableHeaders = [
        {
            title: 'ID',
            width: '10%',
            accessor: 'id',
        },
        {
            title: 'Заголовок',
            width: '50%',
            accessor: 'title',
        },
        {
            title: 'Описание',
            width: '40%',
            accessor: 'body',
        },
    ];

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const postsPerPage = 10;
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        navigate(`/${pageNumber}`);
    };

    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    const handleSearch = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const filteredPosts = posts.filter((post) => {
        return (
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.id.toString().includes(searchTerm.toLowerCase())
        );
    });

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    if (sortColumn) {
        currentPosts.sort((a, b) => {
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];

            if (aValue < bValue) {
                return sortDirection === 'asc' ? -1 : 1;
            } else if (aValue > bValue) {
                return sortDirection === 'asc' ? 1 : -1;
            } else {
                return 0;
            }
        });
    }

    return (
        <div>
            <Search searchTerm={searchTerm} onSearchChange={handleSearch} />
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                    <tr>
                        {tableHeaders.map((header) => (
                            <TableHeader
                                key={header.title}
                                style={{ width: header.width }}
                                onClick={() => handleSort(header.accessor)}
                            >
                                <span>{header.title}</span>
                            </TableHeader>
                        ))}
                    </tr>
                    {currentPosts.map(({ id, title, body }) => (
                        <tr key={id}>
                            <>
                                <TableDigit className='id'>{id}</TableDigit>
                                <TableDigit className='title'>{title}</TableDigit>
                                <TableDigit className='body'>{body}</TableDigit>
                            </>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredPosts.length / postsPerPage)}
                onPageChange={handlePageChange}
            />
        </div>
    );
};
