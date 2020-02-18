const  {userAdmin, URL_LOGIN,pageRegisterSelectors,dayRepotrCelectors} = require ('../register_data');
const {loginAsAdmin,logOutAsAdmin} = require('../actions');


describe ('Login & logOut',()=>{
    before('Login as Admin ',()=> {
        loginAsAdmin();

        browser.pause(500);
        after('logOut', () => {
            logOutAsAdmin();
            browser.pause(1500);
        })
    });

    it('should click  diary', () => {
        $(dayRepotrCelectors.dayReportButtom).click();
    });

    it('should approve diary', () => {
        $(dayRepotrCelectors.approveButton).click();
        browser.pause(1500);
    });

    //approve-button
})