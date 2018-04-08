import React from 'react';
import PropTypes from "prop-types";

const User = ({projectUser}) => (
    <td>
        {projectUser.name}
    </td>
);

User.propTypes = {
    projectUser: PropTypes.object.isRequired,
};

export default User