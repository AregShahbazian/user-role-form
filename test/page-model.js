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
        return new RolePickerOption(this.body, false, text)
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

class User {
    constructor(parent) {
        this.body = parent.find(".user");
    }
}

class UserRoleRow {
    constructor(parent, id) {
        this.body = parent.find(".user-role-row#row-" + id);
        this.user = new User(this.body);
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

    getUserRoleRow(id) {
        return new UserRoleRow(this.body, id)
    }
}

class UserPicker {
    constructor(parent) {
        this.body = parent.find(".user-picker");
        this.dropDownList = new DropDowList(this.body);
    }
}

class UserRoleCreator {
    constructor() {
        this.body = Selector(".user-role-creator");
        this.userPicker = new UserPicker(this.body);
        this.rolePicker = new RolePicker(this.body);
    }
}

export default class Page {
    constructor() {
        this.projectPicker = new ProjectPicker();
        this.userRoleTable = new UserRoleTable();
        this.userRoleCreator = new UserRoleCreator();
        this.noUserP = new NoUserP();
        this.errorP = new ErrorP();
    }
}