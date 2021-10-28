import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private bankPayment: ElementFinder;

  constructor () {
    this.bankPayment = $('.cart_navigation span');
  }

  public async goToBankPayment(): Promise<void> {
    await this.bankPayment.click();
  }
}
