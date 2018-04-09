import styled from 'styled-components';

export const DeleteSpan = styled.span`
    --main-color: #333;

    border: solid var(--main-color) 1px;
    border-radius: 8px;  
    padding: 0.1em 0.2em;
    
    &:hover{
        background-color: #eee;
        cursor: pointer;    
    }
`;
