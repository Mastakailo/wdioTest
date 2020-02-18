const  {URL ,userAdmin, URL_LOGIN,user,dayRepotrCelectors,pageLoginText,pageGROUP,URL_GROUP,pageRegisterSelectors} = require ('./register_data');

const {expect} = require ('chai');

describe('Login page', () => {
    before(() => {
        browser.url(URL_LOGIN);

    });

    after('After ',()=>{
        browser.pause(3000);
    })

    it('should have the right title', () => {
        const actualTitle = browser.getTitle();
        const expectedTitle = pageLoginText.title;
        expect(actualTitle).equal(expectedTitle);
    })

    it('it should have right h1', () => {
        const actualH1text = $('h1').getText();
        const expectedH1text = pageLoginText.h1;
        expect(actualH1text).equal(expectedH1text);
    })

    it('should fill email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(userAdmin.email);
        browser.pause()
    });

    it('should fill pass field ', () => {
        const element = $('form input[name="password"]');
        element.setValue(userAdmin.password);
        browser.pause()
    });

    it('should click login Button', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(2000);
    });
});
describe('Group page', () => {
    before(() => {
        // browser.url(URL_GROUP)
    });

    it('should click Diary Button', () => {
        const element = $('ul a[href="/diary"]');
        element.click();
    });

    it('should have the right title', () => {
        const actualH1text = $('h1').getText();
        const expectedTitle = dayRepotrCelectors.h1;
        expect(actualH1text).equal(expectedTitle);
browser.pause(2000);
    })

    // it('should click New Group Button', () => {
    //     const element = $('div[form-group]a[qa="create-group-button"]');
    //     element.click();
        //<a class="btn btn-secondary" qa="create-group-button" href="/group/create">Create new Group</a>
        // div[@id="site-menu"]//a[@qa="cards-link"]'


});



