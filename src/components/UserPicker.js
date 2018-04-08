import React from 'react';
import PropTypes from "prop-types";
import {DropdownList} from 'react-widgets';
import {Field} from "redux-form";

const renderDropdownList = ({input, data, loading}) =>
    <DropdownList {...input}
                  filter
                  data={data}
                  busy={loading}
                  valueField="id"
                  textField="name"
                  messages={{
                      emptyList: "No available users ..",
                      emptyFilter: "No results ...",
                      filterPlaceholder: "Search by name"
                  }}
                  onChange={input.onChange}/>


const UserPicker = ({users, loading}) => (
    <div>
        <form>
            <label>User </label>
            <Field
                name="user"
                component={renderDropdownList}
                data={users}
                loading={loading}
            />
        </form>
    </div>
);

UserPicker.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default UserPicker