const  {userAdmin, URL_LOGIN,pageRegisterSelectors,dayRepotrSelectors,dayReport} = require ('../register_data');

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
        $(dayRepotrSelectors.dayReportButtom).click();
        browser.pause(2000);
    });

    it('should click new day report ', () => {
        $(dayRepotrSelectors.newDayReport).click();
        browser.pause(2000);
    });

    it('should click "I need help" ', () => {
        $(dayRepotrSelectors.iNeedHelp).click();

    });

    it('it should choose Morale dropdown', () => {
        $(dayRepotrSelectors.morale).selectByVisibleText('9');
    });

    it('should fill hours field ', () => {
        $(dayRepotrSelectors.hours).setValue(dayReport.howManyHours);
    });

    it('should fill how was your day field ', () => {
        $(dayRepotrSelectors.description).setValue(dayReport.howWasDay);
    });
    //      it('should submit DR', () => {
    //     $(dayRepotrSelectors.submitButton).click();
    //     browser.pause(1500);
    // });
});


