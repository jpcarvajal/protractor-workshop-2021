import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private adressStep: ElementFinder;

  constructor () {
    this.adressStep = $('#center_column > form > p > button > span');
  }

  public async goToAdressStep(): Promise<void> {
    await this.adressStep.click();
  }
}
