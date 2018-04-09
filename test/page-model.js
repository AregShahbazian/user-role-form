import {Selector} from "testcafe";

class DropdownListOption {
    constructor(parent, text) {
        this.body = parent.find(".rw-list-option").withText(text);
    }
}

class DropDowList {
    constructor(parent) {
        this.body = parent.find(".rw-dropdown-list");
    }

    getDropdownListOption(text) {
        return new DropdownListOption(this.body, text);
    }

    numberOfDropdownListOptions() {
        return this.body.find(".rw-list-option").count;
    }
}

class RolePickerOption {
    constructor(parent, selected = false, text) {
        this.body = selected ?
            parent.find(".role-picker-option.selected") :
            parent.find(".role-picker-option").withText(text);
    }
}

class RolePicker {
    constructor(parent) {
        this.body = parent.find(".role-picker");
    }

    getSelectedRolePickerOption() {
        return new RolePickerOption(this.body, true)
    }

    getRolePickerOption(text) {
        return new RolePickerOption(this.body, text)
    }
}


export default class Page {
    constructor() {
        this.projectPicker = Selector("#project-picker");
    }

}