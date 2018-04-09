import Page from "./page-model"
import {consoleCheck, maximize} from "./hooks"

fixture `Author CRUD page`
    .page `localhost:8080`
    .beforeEach((t) => {
        maximize()
    });

const page = new Page()


test("Test initial page render", async t => {
    await t
    // assert 2 author rows are rendered
        .expect(page.allAuthorRows.count).eql(2)
});

