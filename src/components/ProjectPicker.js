import React from 'react';
import PropTypes from "prop-types";
import {DropdownList} from 'react-widgets';
import {Field} from "redux-form";

const renderDropdownList = ({input, data, loading, valueField, textField, handleSelect}) =>
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
                      handleSelect(e)
                  }}/>


const ProjectPicker = ({projects, loading, handleSelect}) => (
    <div>
        <form>
            <label>Project </label>
            <Field
                name="project"
                component={renderDropdownList}
                data={Object.values(projects)}
                loading={loading}
                valueField="id"
                textField="name"
                handleSelect={handleSelect}
            />
        </form>
    </div>
);

ProjectPicker.propTypes = {
    projects: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    handleSelect: PropTypes.func.isRequired
};

export default ProjectPicker