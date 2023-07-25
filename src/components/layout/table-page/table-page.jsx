import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Table } from '../../blocks/table/table';

export const TablePage = () => {
    return (
        <Routes>
            <Route path="/" element={<Table />} />
            <Route path="/page/:pageNumber" element={<Table />} />
        </Routes>
    );
};


