import styled from 'styled-components';

export const UserRoleCreatorDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    
    display:  ${props => !props.visible && "none"};

`;
