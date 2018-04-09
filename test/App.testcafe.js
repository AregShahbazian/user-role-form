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
    // assert only project picker is displayed
        .expect(page.projectPicker.body.visible).ok()
});

test("Test displaying table with data", async t => {
    await t
    // assert only project picker is displayed
        .expect(page.projectPicker.body.visible).ok()
    // click on project-picker
    // choose project 1
    // assert that rows 111 and 122 are displayed
});

