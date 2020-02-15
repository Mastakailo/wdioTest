const  {userAdmin, URL_LOGIN,pageLogin,dayRepotrCelectors,dayReport} = require ('./register_data');


describe('CREATE DAY REPORT', () => {
        before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $('form input[name="email"]').setValue(userAdmin.email);
        $('form input[name="password"]').setValue(userAdmin.password);
        $('form button[type="submit"]').click();
            browser.pause(2000)
        });

    it('should have the right title', () => {
        browser.url( '//stage.pasv.us/diary/create');
        browser.pause(2000)
    })

     it('should click login Button', () => {
       $('div input[id="input-0"]').click();
        browser.pause(2000);
    });

    it('it should choose Morale dropdown', () => {
       $(dayRepotrCelectors.morale).selectByVisibleText('9');
    });

    it('should fill hours field ', () => {
        $(dayRepotrCelectors.hours).setValue(dayReport.howManyHours);
    });

    it('should fill how was your day field ', () => {
        $(dayRepotrCelectors.description).setValue(dayReport.howWasDay);
        browser.pause(5000)
    });

});

// <select name="englishLevel" class="form-control  "><option></option><option value="Zero">Zero</option><option value="Beginner">Beginner</option><option value="Elementary">Elementary</option><option value="Pre-Intermediate">Pre-Intermediate</option><option value="Intermediate">Intermediate</option><option value="Upper intermediate">Upper intermediate</option><option value="Advanced">Advanced</option><option value="Proficient">Proficient</option><option value="Native">Native</option></select>
// <select name="morale" class="form-control  "><option></option><option value="10">10 – I am pleased with everything!</option><option value="9">9</option><option value="8">8</option><option value="7">7</option><option value="6">6</option><option value="5">5</option><option value="4">4</option><option value="3">3</option><option value="2">2</option><option value="1">1</option><option value="0">0 – I give up</option></select>


