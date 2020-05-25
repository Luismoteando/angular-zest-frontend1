import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  isMenuBarPresent() {
    return element(by.css('app-root p-menubarsub')).isPresent() as Promise<boolean>;
  }
}
