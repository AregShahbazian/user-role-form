import {Selector} from "testcafe";

class DropdownListOption {
    constructor(parent, text) {
        this.body = parent.find(".rw-list-option").withText(text);
    }
}

class DropdownListInput {
    constructor(parent) {
        this.body = parent.find(".rw-dropdown-list-input");
    }
}

class DropDowList {
    constructor(parent) {
        this.body = parent.find(".rw-dropdown-list");
    }

    getDropdownListOption(text) {
        return new DropdownListOption(this.body, text);
    }

    getDropdownListInput() {
        return new DropdownListInput(this.body);
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

class ProjectPicker {
    constructor() {
        this.body = Selector(".project-picker");
        this.dropDownList = new DropDowList(this.body);
    }
}

class RoleDeleter {
    constructor(parent) {
        this.body = parent.find(".role-deleter");
    }
}

class UserRoleRow {
    constructor(id) {
        this.body = Selector(".user-role-row#row-" + id);
        this.rolePicker = new RolePicker(this.body);
        this.roleDeleter = new RoleDeleter(this.body);
    }
}

class NoUserP {
    constructor() {
        this.body = Selector(".no-user-p");
    }
}

class ErrorP {
    constructor() {
        this.body = Selector(".error-p");
    }
}

class UserRoleTable {
    constructor() {
        this.body = Selector(".user-role-table-div");
    }
}

class UserRoleCreator {
    constructor() {
        this.body = Selector(".user-role-creator");
        this.dropDownList = new DropDowList(this.body);
        this.rolePicker = new RolePicker(this.body);
    }
}

export default class Page {
    constructor() {
        this.projectPicker = new ProjectPicker();
        this.userRoleTable = new UserRoleTable();
        this.userRoleCreator = new UserRoleCreator();
    }
}