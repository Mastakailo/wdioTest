const  {userAdmin, URL_LOGIN,pageRegisterSelectors,dayRepotrCelectors,dayReport} = require ('./register_data');

function loginAsAdmin () {
            browser.url('//stage.pasv.us/user/login');
            $(pageRegisterSelectors.emailInput).setValue(userAdmin.email);
            $(pageRegisterSelectors.passwordInput).setValue(userAdmin.password);
            $(pageRegisterSelectors.submitButtom).click();
            browser.pause(5000);

}

function logOutAsAdmin () {
            $(pageRegisterSelectors.logOutButton).click();
            $(pageRegisterSelectors.logOut).click();
            browser.pause(3000);
}

module.exports = {loginAsAdmin,logOutAsAdmin};

