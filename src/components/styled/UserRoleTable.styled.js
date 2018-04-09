import styled from 'styled-components';

export const Table = styled.table`
    position: relative;
    table-layout: auto;
    width: 100%;
    
    opacity:  ${props => !props.loading ? "1.0" : "0.3"};
`;
