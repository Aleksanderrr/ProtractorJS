import { HomePage } from "../pages/HomePage";
import { browser } from "protractor";

describe("HomePage tests", () => {
    const homePage = new HomePage();

    beforeEach(() => {
        homePage.get();
    });

    it("view github project", () => {
        const expectedUrl = "https://github.com/angular/protractor";
        homePage.clickViewOnGitHub();
        expect(browser.getCurrentUrl()).toEqual(expectedUrl)
    });
});