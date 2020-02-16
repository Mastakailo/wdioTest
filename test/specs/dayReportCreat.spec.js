const  {userAdmin, URL_LOGIN,pageRegisterSelectors,dayRepotrCelectors,dayReport} = require ('./register_data');


describe('CREATE DAY REPORT', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $(pageRegisterSelectors.emailInput).setValue(userAdmin.email);
        $(pageRegisterSelectors.passwordInput).setValue(userAdmin.password);
        $(pageRegisterSelectors.submitButtom).click();
        browser.pause(2000);
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

        // it('should click Save ', () => {
        //     $(pageRegisterSelectors.submitButtom).click();
        //     browser.pause(2000);
        // });

});

