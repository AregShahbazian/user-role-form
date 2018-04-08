import React from 'react';
import ProjectPickerContainer from "../containers/ProjectPickerContainer";
import UserRoleTableContainer from "../containers/UserRoleTableContainer";
import UserRoleCreatorContainer from "../containers/UserRoleCreatorContainer";

const App = () => (
    <div>
        <ProjectPickerContainer/>
        <UserRoleTableContainer/>
        <UserRoleCreatorContainer/>
    </div>
);

export default App