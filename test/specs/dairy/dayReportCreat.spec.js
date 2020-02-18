const  {userAdmin, URL_LOGIN,pageRegisterSelectors,dayRepotrCelectors,dayReport} = require ('../register_data');

const  {loginAsAdmin,logOutAsAdmin} = require('../actions');

describe ('Login & logOut',()=> {
    before('Login as Admin ', () => {
        loginAsAdmin();

        browser.pause(500);
        after('logOut', () => {
            logOutAsAdmin();
            browser.pause(1500);
        })
    });

    it('should click  diary', () => {
        $(dayRepotrCelectors.dayReportButtom).click();
        browser.pause(2000);
    });

    it('should click new day report ', () => {
        $(dayRepotrCelectors.newDayReport).click();
        browser.pause(2000);
    });

    it('should click "I need help" ', () => {
        $(dayRepotrCelectors.iNeedHelp).click();

    });

    it('it should choose Morale dropdown', () => {
        $(dayRepotrCelectors.morale).selectByVisibleText('9');
    });

    it('should fill hours field ', () => {
        $(dayRepotrCelectors.hours).setValue(dayReport.howManyHours);
    });

    it('should fill how was your day field ', () => {
        $(dayRepotrCelectors.description).setValue(dayReport.howWasDay);
    });
    //      it('should submit DR', () => {
    //     $(dayRepotrCelectors.submitButton).click();
    //     browser.pause(1500);
    // });
});


