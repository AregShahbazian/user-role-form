import React from 'react';
import PropTypes from "prop-types";

const User = ({user}) => (
    <td>
        {JSON.stringify(user)}
    </td>
);

User.propTypes = {
    user: PropTypes.object.isRequired
};

export default User