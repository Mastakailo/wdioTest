const  {userAdmin, URL_LOGIN,pageRegisterSelectors,} = require ('./register_data');


describe('CREATE NEW GROUP', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $(pageRegisterSelectors.emailInput).setValue(userAdmin.email);
        $(pageRegisterSelectors.passwordInput).setValue(userAdmin.password);
        $(pageRegisterSelectors.submitButtom).click();
        browser.pause(2000);
    });

    it('should open', () => {
        browser.url( 'https://stage.pasv.us/group/create');
        browser.pause(2000)
    })





});