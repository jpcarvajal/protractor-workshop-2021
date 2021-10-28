import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private email: ElementFinder;
  private password: ElementFinder;
  private login: ElementFinder;

  constructor () {
    this.email = $('#email');
    this.password = $('#passwd');
    this.login = $('#SubmitLogin > span');
  }

  public async signInClick(): Promise<void> {
    await this.email.sendKeys('aperdomobo@gmail.com');
    await this.password.sendKeys('WorkshopProtractor');
    await this.login.click();
  }
}
