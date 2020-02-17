const  {userAdmin, URL_LOGIN,newUser,newCourseSelectors,pageRegisterSelectors,newGroupInfo,newGproupSelectors} = require ('./register_data');

const {expect} = require ('chai');



describe('CREATE NEW COURSE', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $(pageRegisterSelectors.emailInput).setValue(userAdmin.email);
        $(pageRegisterSelectors.passwordInput).setValue(userAdmin.password);
        $(pageRegisterSelectors.submitButtom).click();
        browser.pause(2000);
    });
    it('should click group buttom', () => {
        $(newCourseSelectors.courseButtom).click();
    });

    it('should click create new group buttom', () => {
        $(newCourseSelectors.createNewGroupButton).click();
browser.pause(3000);
    });

    it('should have the right title', () => {
        const actualTitle = browser.getElementTex();
        const expectedTitle = pageLogin.title;
        expect(actualTitle).equal(expectedTitle);
    })
});
//
// <a class="btn btn-primary" href="/course/create">Create new Course</a>
// });
