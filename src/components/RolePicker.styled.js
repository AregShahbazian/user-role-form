import styled from 'styled-components';

export const RolePickerDiv = styled.div`
    display:  ${props => !props.visible && "none"};
`;

export const RoleSpan = styled.span`
    --main-color: #333;
  
    border: solid var(--main-color) 1px;
    border-left-style: ${props => props.first ? "solid" : "none"};
    border-top-left-radius:  ${props => props.first ? "8px" : 0};
    border-bottom-left-radius:  ${props => props.first ? "8px" : 0};
    border-top-right-radius:  ${props => props.last ? "8px" : 0};
    border-bottom-right-radius:  ${props => props.last ? "8px" : 0};
    
    padding: 0.2em 0.2em;
    
    background-color:  ${props => props.selected && "var(--main-color)"};
    color:  ${props => props.selected ? "#fff" : "var(--main-color)"};
    
    &:hover{
        background-color: #eee;
        cursor: pointer;    
    }
`;