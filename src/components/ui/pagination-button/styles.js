import styled from 'styled-components';

export const StyledButton = styled.button`
    border: none;
    background-color: transparent;

    font-family: Roboto;
    font-size: 24px;

    &:not(:disabled) {
        cursor: pointer;
    }
`;