const  {userAdmin,newUserInfo,URL_LOGIN,newUserSelectors,newCourseSelectors,pageRegisterSelectors,newGroupInfo,newGproupSelectors} = require ('./register_data');

const {expect} = require ('chai');



describe('CREATE NEW COURSE', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $(pageRegisterSelectors.emailInput).setValue(userAdmin.email);
        $(pageRegisterSelectors.passwordInput).setValue(userAdmin.password);
        $(pageRegisterSelectors.submitButtom).click();
        browser.pause(2000);
    });

    it('should click create new User buttom', () => {
        $(newUserSelectors.userButton).click();
        browser.pause(3000);
    });

    it ('should fill user name',()=>{
        $(newUserSelectors.name).setValue(newUserInfo.name)
    })

    it ('should fill user email',()=>{
        $(newUserSelectors.email).setValue(newUserInfo.email)
    })

    it ('should fill user phone',()=>{
        $(newUserSelectors.phone).setValue(newUserInfo.phone)
    })

    it ('should click user group',()=>{
        $(newUserSelectors.groupField).click()
    })

    it ('should choose  user group',()=>{
        $(newUserSelectors.groupFieldFilll).setValue(newUserInfo.group)
    })

    it ('should click user group',()=>{
        $(newUserSelectors.groupField).click()
        browser.pause(3000);
    })


});
