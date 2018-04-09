import React from 'react';
import PropTypes from "prop-types";
import {DropdownList} from 'react-widgets';
import {Field} from "redux-form";
import styled from 'styled-components';

const UserPickerForm = styled.form`
    min-width: 150px;
    max-width: 200px;
    flex-grow: 1;
    margin-left: 1em;
`;


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
    <UserPickerForm>
        <div>
            <Field
                name="user"
                component={renderDropdownList}
                data={users}
                loading={loading}/>
        </div>
    </UserPickerForm>
);

UserPicker.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default UserPicker