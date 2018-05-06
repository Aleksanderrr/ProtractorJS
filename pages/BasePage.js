import { element } from "protractor";
import { protractor } from "protractor/built/ptor";

export class BasePage {

    constructor() {
    }

    clickElement(element) {
        element.click();
    }

    sendTextToElement(element, text) {
        element.clear();
        element.sendKeys(text);
    }
}
