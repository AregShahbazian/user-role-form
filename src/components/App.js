import React from 'react';
import ProjectPickerContainer from "../containers/ProjectPickerContainer";
import UserRoleTableContainer from "../containers/UserRoleTableContainer";
import UserRoleCreatorContainer from "../containers/UserRoleCreatorContainer";
import {AppDiv} from "./styled/App.styled";

const App = () => (
    <AppDiv>
        <ProjectPickerContainer/>
        <UserRoleTableContainer/>
        <UserRoleCreatorContainer/>
    </AppDiv>
);

export default App