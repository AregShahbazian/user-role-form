import React from 'react';
import PropTypes from "prop-types";

const Project = ({project}) => (
    <td>
        {JSON.stringify(project)}
    </td>
);

Project.propTypes = {
    project: PropTypes.object.isRequired
};

export default Project