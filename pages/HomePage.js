import { BasePage } from "./BasePage";

export class HomePage extends BasePage {

    constructor() {
        super();
        this.viewOnGitHubButton = element(by.xpath("//a[contains(@class, 'github-button')]"));
    }

    get() {
        browser.get(browser.baseUrl);
    }

    clickViewOnGitHub() {
        this.clickElement(this.viewOnGitHubButton);
    }
}
