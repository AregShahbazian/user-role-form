import React from 'react';
import PropTypes from "prop-types";
import {DropdownList} from 'react-widgets';
import {Field} from "redux-form";
import styled from 'styled-components';

const ProjectPickerForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1em;
    flex: 90 0 auto;
`;

const ProjectPickerField = styled.div`
    flex: 2 0 auto;
    margin-left: 1em;
`;


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
    <ProjectPickerForm id="project-picker">
        <label>Choose project </label>
        <ProjectPickerField>
            <Field
                name="project"
                component={renderDropdownList}
                data={projects}
                loading={loading}
                handleChange={handleSelect}/>
        </ProjectPickerField>
    </ProjectPickerForm>
);

ProjectPicker.propTypes = {
    projects: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    handleSelect: PropTypes.func.isRequired
};

export default ProjectPicker