const  {userAdmin,newUserInfo,flashCardsSelectors,URL_LOGIN,newUserSelectors,newCourseSelectors,pageRegisterSelectors,newGroupInfo,newGproupSelectors} = require ('./register_data');

const {expect} = require ('chai');



describe('FLASH GRUOP CREATE', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $(pageRegisterSelectors.emailInput).setValue(userAdmin.email);
        $(pageRegisterSelectors.passwordInput).setValue(userAdmin.password);
        $(pageRegisterSelectors.submitButtom).click();
        browser.pause(1000);
    });
    after('AFTER',()=>{
        browser.pause(1000);
    })

    it('should click top menu cards', () => {
        $(flashCardsSelectors.topCardsButton).click();
    });

    it('should click menu create NewFlashcards', () => {
        $(flashCardsSelectors.createNewFlashCardsButton).click();
    });

    it('should check if modal open ', () => {
        browser.pause(  2000);
      $(flashCardsSelectors.sidePanel).isDisplayed().true;
    });

    it('should check if modal tittle is correct ', () => {

        const actualText = $(flashCardsSelectors.sidePanelTitle).getText();
        const expectedText = 'Create Flash Group';
        expect(actualText).eq(expectedText);
      //$(sideText).eq('Create Flash Group');
    });

    it (' fill out  name',()=>{
        $(flashCardsSelectors.newCardinputName).setValue(newGroupInfo.name)
    })

    it (' fill out  description',()=>{
        $(flashCardsSelectors.newCardinputDecsription).setValue(newGroupInfo.description)
    })
    it('should click menu create NewFlashcards', () => {
        $(flashCardsSelectors.createButtonSubbmit).click();
        browser.pause(3000);
    });
    it('should open browser', function () {
        browser.url('//stage.pasv.us/flash');

    });
    it('should check first item in list newCard group ', function () {
    $(flashCardsSelectors.newCardTittle).click();
   // const expectedText = $(newGroupInfo.description);
   // expect(actual).eq(expectedText);
        browser.pause(3000);
    });

    it('should have proof tittle ', function () {
        const title = $('//h1').getText();
        const expectedText = newGroupInfo.name;
        expect(title).eq(expectedText);
    });


});