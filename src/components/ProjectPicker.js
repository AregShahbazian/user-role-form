import React from 'react';
import PropTypes from "prop-types";
import {DropdownList} from 'react-widgets';
import {Field} from "redux-form";

const renderDropdownList = ({input, data, loading, valueField, textField, onSelect}) =>
    <DropdownList {...input}
                  filter
                  data={data}
                  busy={loading}
                  valueField={valueField}
                  textField={textField}
                  messages={{
                      emptyList: "Project list could not be retrieved",
                      emptyFilter: "No results ...",
                      filterPlaceholder: "Search by name"
                  }}
                  onChange={(e) => {
                      input.onChange(e)
                      onSelect(e)
                  }}/>


const ProjectPicker = ({projects, loading, onSelect}) => (
    <div>
        <form>
            <label>Project </label>
            <Field
                name="project"
                component={renderDropdownList}
                data={projects}
                loading={loading}
                valueField="id"
                textField="name"
                onSelect={onSelect}
            />
        </form>
    </div>
);

ProjectPicker.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ).isRequired,
    loading: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default ProjectPicker