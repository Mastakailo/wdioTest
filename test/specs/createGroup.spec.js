const  {userAdmin, URL_LOGIN,} = require ('./register_data');


describe('CREATE DAY REPORT', () => {
    before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $('form input[name="email"]').setValue(userAdmin.email);
        $('form input[name="password"]').setValue(userAdmin.password);
        $('form button[type="submit"]').click();
        browser.pause(2000);
    });

    it('should open', () => {
        browser.url( 'https://stage.pasv.us/group/create');
        browser.pause(2000)
    })
});