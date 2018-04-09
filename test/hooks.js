import {t} from 'testcafe';

export async function maximize() {
    await t.maximizeWindow();
}