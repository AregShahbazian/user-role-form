import React from 'react';
import PropTypes from "prop-types";
import {DropdownList} from 'react-widgets';
import {Field} from "redux-form";
import {DropDownListField, DropDownListForm} from "./styled/ProjectPicker.styled";

const renderDropdownList = ({input, data, loading, handleChange}) =>
    <DropdownList {...input}
                  filter
                  data={data}
                  busy={loading}
                  valueField="id"
                  textField="name"
                  messages={{
                      emptyList: "Project list could not be retrieved",
                      emptyFilter: "No results ...",
                      filterPlaceholder: "Search by name"
                  }}
                  onChange={(e) => {
                      input.onChange(e)
                      handleChange(e)
                  }}/>

const ProjectPicker = ({projects, loading, handleSelect}) => (
    <DropDownListForm>
        <label>Choose project </label>
        <DropDownListField>
            <Field
                name="project"
                component={renderDropdownList}
                data={projects}
                loading={loading}
                handleChange={handleSelect}/>
        </DropDownListField>
    </DropDownListForm>
);

ProjectPicker.propTypes = {
    projects: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    handleSelect: PropTypes.func.isRequired
};

export default ProjectPicker