import React from 'react';
import ProjectPickerContainer from "../containers/ProjectPickerContainer";
import UserRoleTableContainer from "../containers/UserRoleTableContainer";
import UserRoleCreatorContainer from "../containers/UserRoleCreatorContainer";
import styled from 'styled-components';

const AppDiv = styled.div`
    font-family: "Trebuchet MS", Helvetica, sans-serif;
`;

const App = () => (
    <AppDiv>
        <ProjectPickerContainer/>
        <UserRoleTableContainer/>
        <UserRoleCreatorContainer/>
    </AppDiv>
);

export default App