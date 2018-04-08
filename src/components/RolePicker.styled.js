import styled from 'styled-components';

export const RolePickerDiv = styled.div`
    display:  ${props => !props.visible && "none"};
`;

export const RoleSpan = styled.span`
    border: solid #bbb 2px;
    border-left-width: ${props => props.first ? "4px" : 0};
    border-top-left-radius:  ${props => props.first ? "8px" : 0};
    border-bottom-left-radius:  ${props => props.first ? "8px" : 0};
    border-top-right-radius:  ${props => props.last ? "8px" : 0};
    border-bottom-right-radius:  ${props => props.last ? "8px" : 0};
    
    padding: 0.2em 0.2em;
    
    background-color:  ${props => props.selected && "#bbb"};
`;