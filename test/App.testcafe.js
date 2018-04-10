import Page from "./page-model"
import {consoleCheck, maximize} from "./hooks"

fixture `User Role Form`
    .page `localhost:3000`
    .beforeEach((t) => {
        maximize()
    });

const page = new Page();

const PROJECT_ID_1 = "1";
const PROJECT_ID_2 = "2";
const PROJECT_ID_3 = "3";
const PROJECT_NAME_1 = "Trip to space";
const PROJECT_NAME_2 = "Assembly Ikea furniture";
const PROJECT_NAME_3 = "Datumize Zentral";

const USER_ID_1 = "1";
const USER_ID_2 = "2";
const USER_ID_3 = "3";
const USER_NAME_1 = "John Doe";
const USER_NAME_2 = "Alice";
const USER_NAME_3 = "Bob";

const ROLE_ID_1 = "1";
const ROLE_ID_2 = "2";
const ROLE_ID_3 = "3";
const ROLE_NAME_1 = "Admin";
const ROLE_NAME_2 = "Editor";
const ROLE_NAME_3 = "Viewer";

const PROJECT_USER_ROLE_ID_111 = "111";
const PROJECT_USER_ROLE_ID_122 = "122";
const PROJECT_USER_ROLE_ID_211 = "211";
const PROJECT_USER_ROLE_ID_133 = "133";


test("Test initial page render", async t => {
    await t
    // check only project picker is displayed
        .expect(page.projectPicker.body.visible).ok()
});

test("Test displaying table with data", async t => {
    await t
    // click on project-picker
        .click(page.projectPicker.dropDownList.body)
        // choose project 1
        .click(page.projectPicker.dropDownList.getDropdownListOption(PROJECT_NAME_1).body)
        // check that the role-picker in the user-role-creator is not visible
        .expect(page.userRoleCreator.rolePicker.body.visible).notOk()
        // check that rows 111 and 122 are displayed
        .expect(page.userRoleTable.getUserRoleRow(PROJECT_USER_ROLE_ID_111).body.visible).ok()
        .expect(page.userRoleTable.getUserRoleRow(PROJECT_USER_ROLE_ID_122).body.visible).ok()
        // check that row 111 has user 1 name and role 1 selected
        .expect(page.userRoleTable.getUserRoleRow(PROJECT_USER_ROLE_ID_111).user.body.innerText).eql(USER_NAME_1)
        .expect(page.userRoleTable.getUserRoleRow(PROJECT_USER_ROLE_ID_111).rolePicker
            .getSelectedRolePickerOption().body.innerText).eql(ROLE_NAME_1)
        // check that row 122 has user 2 name and role 2 selected
        .expect(page.userRoleTable.getUserRoleRow(PROJECT_USER_ROLE_ID_122).user.body.innerText).eql(USER_NAME_2)
        .expect(page.userRoleTable.getUserRoleRow(PROJECT_USER_ROLE_ID_122).rolePicker
            .getSelectedRolePickerOption().body.innerText).eql(ROLE_NAME_2)
        // click on project-picker
        .click(page.projectPicker.dropDownList.body)
        // click on project 3
        .click(page.projectPicker.dropDownList.getDropdownListOption(PROJECT_NAME_3).body)
        // check that no-user message is displayed
        .expect(page.noUserP.body.exists).ok()
});

test("Test adding new row to table", async t => {
    await t
    // click on project-picker
        .click(page.projectPicker.dropDownList.body)
        // choose project 1
        .click(page.projectPicker.dropDownList.getDropdownListOption(PROJECT_NAME_1).body)
        // click on user picker
        .click(page.userRoleCreator.userPicker.dropDownList.body)
        // check that only Bob option is available
        .expect(page.userRoleCreator.userPicker.dropDownList.getDropdownListOption(USER_NAME_3).body.exists).ok()
        .expect(page.userRoleCreator.userPicker.dropDownList.numberOfDropdownListOptions()).eql(1)
        // click on the Bob option
        .click(page.userRoleCreator.userPicker.dropDownList.getDropdownListOption(USER_NAME_3).body)
        // check that the role-picker in the user-role-creator is visible
        .expect(page.userRoleCreator.rolePicker.body.visible).ok()
        // click on role 3
        .click(page.userRoleCreator.rolePicker.getRolePickerOption(ROLE_NAME_3).body)
        // check that user picker is cleared
        .expect(page.userRoleCreator.userPicker.dropDownList.getDropdownListInput().body.innerText).eql("")
        // check that the role-picker in the user-role-creator is not visible
        .expect(page.userRoleCreator.rolePicker.body.visible).notOk()
        // check that row 133 is displayed
        .expect(page.userRoleTable.getUserRoleRow(PROJECT_USER_ROLE_ID_133).body.visible).ok()
        // check that row 133 has user 3 name and role 3 selected
        .expect(page.userRoleTable.getUserRoleRow(PROJECT_USER_ROLE_ID_133).user.body.innerText).eql(USER_NAME_3)
        .expect(page.userRoleTable.getUserRoleRow(PROJECT_USER_ROLE_ID_133).rolePicker
            .getSelectedRolePickerOption().body.innerText).eql(ROLE_NAME_3)
        // click on user picker
        .click(page.userRoleCreator.userPicker.dropDownList.body)
        // check that no more options are available
        .expect(page.userRoleCreator.userPicker.dropDownList.numberOfDropdownListOptions()).eql(0)
});


test("Test editing and deleting row", async t => {
    await t
    // click on project-picker
        .click(page.projectPicker.dropDownList.body)
        // choose project 1
        .click(page.projectPicker.dropDownList.getDropdownListOption(PROJECT_NAME_1).body)
        // click on role 2 in row 111
        .click(page.userRoleTable.getUserRoleRow(PROJECT_USER_ROLE_ID_111).rolePicker.getRolePickerOption(ROLE_NAME_2).body)
        // check that role 2 in row 111 is selected
        .expect(page.userRoleTable.getUserRoleRow(PROJECT_USER_ROLE_ID_111).rolePicker
            .getSelectedRolePickerOption().body.innerText).eql(ROLE_NAME_2)
        // click on delete button of row 122
        .click(page.userRoleTable.getUserRoleRow(PROJECT_USER_ROLE_ID_122).roleDeleter.body)
        // check that row 122 doesnt exist anymore
        .expect(page.userRoleTable.getUserRoleRow(PROJECT_USER_ROLE_ID_122).body.exists).notOk()
        // click on user picker
        .click(page.userRoleCreator.userPicker.dropDownList.body)
        // check that Bob and Alice rows are available
        .expect(page.userRoleCreator.userPicker.dropDownList.getDropdownListOption(USER_NAME_2).body.exists).ok()
        .expect(page.userRoleCreator.userPicker.dropDownList.getDropdownListOption(USER_NAME_3).body.exists).ok()
        .expect(page.userRoleCreator.userPicker.dropDownList.numberOfDropdownListOptions()).eql(2)
});

test("Test something to cause error", async t => {
    await t
    // click on project-picker
        .click(page.projectPicker.dropDownList.body)
        // choose project 1
        .click(page.projectPicker.dropDownList.getDropdownListOption(PROJECT_NAME_1).body)
        // click on user picker
        .click(page.userRoleCreator.userPicker.dropDownList.body)
        // click on the Bob option
        .click(page.userRoleCreator.userPicker.dropDownList.getDropdownListOption(USER_NAME_3).body)
        // click on role 3
        .click(page.userRoleCreator.rolePicker.getRolePickerOption(ROLE_NAME_3).body)
        // click on delete button of row 133
        .click(page.userRoleTable.getUserRoleRow(PROJECT_USER_ROLE_ID_133).roleDeleter.body)
        // check that row 133 is not deleted
        .expect(page.userRoleTable.getUserRoleRow(PROJECT_USER_ROLE_ID_133).body.exists).ok()
        // check that error-message is displayed
        .expect(page.errorP.body.visible).ok()
});



















