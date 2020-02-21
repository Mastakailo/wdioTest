import  {URL ,userAdmin, URL_LOGIN,user,dayRepotrSelectors,pageLoginText,pageGROUP,URL_GROUP,pageRegisterSelectors}  from './register_data';
import Page from './Page';
import {expect} from 'chai';
import LoginPage from './loginOP';

describe('Login page', () => {
    it('shoud open login page  ', () => {
        LoginPage.open();
    });

    it('should fill out email', function () {
        LoginPage.email.setValue('smirkos2@gmail.com')
        browser.pause(1000)
    });

    it('should fill out PASSWORD', function () {
        LoginPage.email.setValue('5233279')
        browser.pause(1000)
    });

});