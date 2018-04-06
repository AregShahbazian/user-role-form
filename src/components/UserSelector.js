import React from 'react';
import PropTypes from "prop-types";
import {DropdownList} from 'react-widgets';
import {Field} from "redux-form";

const renderDropdownList = ({input, data, loading, valueField, textField}) =>
    <DropdownList {...input}
                  filter
                  data={data}
                  busy={loading}
                  valueField={valueField}
                  textField={textField}
                  messages={{
                      emptyList: "User list could not be retrieved",
                      emptyFilter: "No results ...",
                      filterPlaceholder: "Search by name"
                  }}
                  onChange={input.onChange}/>


const UserSelector = ({users, loading}) => (
    <div>
        <form>
            <label>User </label>
            <Field
                name="user"
                component={renderDropdownList}
                data={users}
                loading={loading}
                valueField="id"
                textField="name"
            />
        </form>
    </div>
);

UserSelector.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ).isRequired,
    loading: PropTypes.bool.isRequired
};

export default UserSelector