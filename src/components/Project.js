import React from 'react';
import PropTypes from "prop-types";

const Project = ({project}) => (
    <div>
        {JSON.stringify(project)}
    </div>
);

Project.propTypes = {
    project: PropTypes.object.isRequired
};

export default Project