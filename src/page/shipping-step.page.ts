import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private button1: ElementFinder;
  private button2: ElementFinder;

  constructor () {
    this.button1 = $('#cgv');
    this.button2 = $('#form > p > button > span');
  }

  public async button1Click(): Promise<void> {
    await this.button1.click();
  }
  public async button2Click(): Promise<void> {
    await this.button2.click();
  }
}
