import React from 'react';
import PropTypes from "prop-types";
import {DropdownList} from 'react-widgets';
import {Field} from "redux-form";

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
    <div>
        <form>
            <label>Project </label>
            <Field
                name="project"
                component={renderDropdownList}
                data={projects}
                loading={loading}
                handleChange={handleSelect}
            />
        </form>
    </div>
);

ProjectPicker.propTypes = {
    projects: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    handleSelect: PropTypes.func.isRequired
};

export default ProjectPicker