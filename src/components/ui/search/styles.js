import styled from 'styled-components';

export const StyledSearch = styled.input`
    width: 58.5%;
    padding: 18px 35px 15px 26px;
    margin-bottom: 15px;

    background: #5a5c66;
    border: 1px solid #5a5c66;
    color: #ffffff;
    font-family: Roboto, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    

    &::placeholder {
        color: #b2b7bf;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance:none;
    }
`