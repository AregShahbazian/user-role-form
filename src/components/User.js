import React from 'react';
import PropTypes from "prop-types";

const User = ({projectUser}) => (
    <div className="user">
        {projectUser.name}
    </div>
);

User.propTypes = {
    projectUser: PropTypes.object.isRequired,
};

export default User