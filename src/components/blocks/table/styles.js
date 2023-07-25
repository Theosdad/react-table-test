import styled from 'styled-components';

export const TableHeader = styled.th`
    background: #474955;
    padding: 16px 23px;  

    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    cursor: pointer;

    span {
        position: relative;

        &::after {
            content: '';
            display: block;
            width: 8px;
            height: 8px;
            border: 1px solid #ffffff;
            border-left: none;
            border-top: none;
            transform: rotate(45deg);
            
            position: absolute;
            right: -20px;
            top: 3px;
        }
    }
`
export const TableDigit = styled.td`
    padding: 25px 10px;

    &.id {
        width: 10%;
        text-align: center;
    }

    &.title {
        width: 50%;
    }

    &.body {
        width: 40%;
    }
`
