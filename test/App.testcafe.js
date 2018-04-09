import Page from "./page-model"
import {consoleCheck, maximize} from "./hooks"

fixture `User Role Form`
    .page `localhost:3000`
    .beforeEach((t) => {
        maximize()
    });

const page = new Page()


test("Test initial page render", async t => {
    await t
        // assert only project picker is displayed
        .expect(page.projectPicker.body.visible).ok()
});

