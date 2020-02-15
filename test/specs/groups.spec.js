const  {URL , URL_LOGIN,user,user1,pageRegister,pageLogin,pageGROUP,URL_GROUP,pageRegisterSelectors} = require ('./register_data');

const {expect} = require ('chai');





describe('Group page', () => {
    before(() => {
        browser.url(URL_GROUP)
    });

    it('should click Group Button', () => {
        const element = $('form button[type="Group"]');
        element.click();
        browser.pause(2000);
    });

    it('should have the right title', () => {
        const actualH1text = $('h1').getText();
        const expectedTitle = pageGROUP.h1.getText();
        expect(actualTitle).equal(expectedTitle);
    })

})



