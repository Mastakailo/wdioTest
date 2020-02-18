const  {userAdmin, URL_LOGIN,pageRegisterSelectors,newGroupInfo,newGproupSelectors} = require ('../register_data');

const {expect} = require ('chai');



describe('CREATE nNEW GROUP', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $(pageRegisterSelectors.emailInput).setValue(userAdmin.email);
        $(pageRegisterSelectors.passwordInput).setValue(userAdmin.password);
        $(pageRegisterSelectors.submitButtom).click();
        browser.pause(3000);
    });

    it('should click group buttom',() => {
        $(newGproupSelectors.groupButtom).click();
    });

    it('should click create new group buttom',() => {
        $(newGproupSelectors.newGproupButtom).click();
    });

    it('Fill in group name', () => {
        $(newGproupSelectors.inputGroupName).setValue(newGroupInfo.name);

    });

    it('Fill in group description', () => {
        $(newGproupSelectors.descriptionGroup).setValue(newGroupInfo.description);
    });

    it('it should choose Access type dropdown', () => {
       $(newGproupSelectors.accsesTypeSelector).selectByVisibleText(newGroupInfo.accsesType);
    });

    it('should click create new group button',() => {
        $(newGproupSelectors.createButton).click();
        browser.pause(5000);
    });


});



