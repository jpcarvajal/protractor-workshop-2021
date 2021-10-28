import { browser } from 'protractor';
import { MenuContentPage , PaymentStepPage , ProductListPage, ProductAddedModalPage, BankPaymentPage, SignInStepPage, AddressStepPage, ShippingStepPage, SummaryStepPage, OrderSummaryPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const payByBankButton: PaymentStepPage = new PaymentStepPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModal: ProductAddedModalPage = new ProductAddedModalPage();
  const bankPayment: BankPaymentPage = new BankPaymentPage();
  const signIn: SignInStepPage = new SignInStepPage();
  const adressStep: AddressStepPage = new AddressStepPage();
  const shippingStage: ShippingStepPage = new ShippingStepPage();
  const summaryStep: SummaryStepPage = new SummaryStepPage();
  const orderSummary: OrderSummaryPage = new OrderSummaryPage();
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(20000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(10000));
    await productListPage.addToProductCart();
    await(browser.sleep(10000));
    await productAddedModal.goToProductAdded();
    await(browser.sleep(10000));
    await bankPayment.goToBankPayment();
    await(browser.sleep(10000));

    await signIn.signInClick();
    await(browser.sleep(10000));

    await adressStep.goToAdressStep();
    await(browser.sleep(10000));

    await shippingStage.button1Click();
    await(browser.sleep(10000));

    await shippingStage.button2Click();
    await(browser.sleep(10000));

    await payByBankButton.goToBankPaymentPage();
    await(browser.sleep(10000));
    await summaryStep.goToSummaryStep();
    await(browser.sleep(10000));

    await expect(orderSummary.goToOrderSummary()).toBe('Your order on My Store is complete.');
  });
});
