import Page from "./page-model"
import {consoleCheck, maximize} from "./hooks"

fixture `User Role Form`
    .page `localhost:3000`
    .beforeEach((t) => {
        maximize()
    });

const page = new Page()

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


test("Test initial page render", async t => {
    await t
    // check only project picker is displayed
        .expect(page.projectPicker.body.visible).ok()
});

test("Test displaying table with data", async t => {
    await t
    // click on project-picker
    // choose project 1
    // check that the role-picker in the user-role-creator is not visible
    // check that rows 111 and 122 are displayed
    // check that row 111 has user 1 name and role 1 selected
    // check that row 122 has user 2 name and role 2 selected
    // click on project-picker
    // choose project 3
    // check that no-user message is displayed
});


test("Test adding new row to table", async t => {
    await t
    // click on project-picker
    // choose project 1
    // click on user picker
    // check that only Bob option is available
    // click on the Bob option
    // check that the role-picker in the user-role-creator is visible
    // click on role 3
    // check that user picker is cleared
    // check that the role-picker in the user-role-creator is not visible
    // check that row 133 is displayed
    // check that row 133 has user 3 name and role 3 selected
    // click on user picker
    // check that no more options are available
});


test("Test editing and deleting row", async t => {
    await t
    // click on project-picker
    // choose project 1
    // click on role 2 in row 111
    // check that role 2 in row 111 is selected
    // click on delete button of row 122
    // check that row 122 is not displayed
    // click on user picker
    // check that Bob and Alice rows are available
});

test("Test something to cause error", async t => {
    await t
    // click on project-picker
    // choose project 1
    // click on user picker
    // click on the Bob option
    // click on role 3
    // click on delete button of row 133
    // check that row 133 is not deleted
    // check that error-message is displayed
});
























