const user = {
    firstName : 'John',
    lastName : 'Smirnov',
    password : 5233279,
    phone : 14245029099,
    email : Math.random()+'smirkos2@gmail.com',
    about : 'da dad da ad',
    goals : 'eat sleep code',
    language : 'Native',
};
const HOST = '//stage.pasv.us'
const userAdmin = {
    password : 5233279,
    email : 'smirkos2@gmail.com',
};
const pageGROUP = {
    title : 'Progress Monitor',
    h1 : 'Groups',
};
const URL = `${HOST}/user/register`;
const URL_LOGIN = `${HOST}/user/login`;
const URL_GROUP = `{HOST}/group`;
const pageRegister = {
     title : 'Progress Monitor',
    h1 : 'User Register',
    description : 'Profiles with fictitious or dummy data will be deleted.',
    buttonText : 'Submit',
};
const pageLogin = {
    title : 'Progress Monitor',
    h1 : 'User Login',
};
const pageConfirmation = {
    h1 : 'You are a new user',
};
const pageRegisterSelectors = {
    h1 : 'h1' ,
    descr : 'p',
    submitButtom : 'form button[type="submit"]',
    firstNameInput : 'form input[name="firstName"]',
    lastNameInput : 'form input[name="lastName"]',
    phoneInput : 'form input[name="phone"]',
    emailInput : 'form input[name="email"]',
    passwordInput : 'form input[name="password"]',
    aboutInput : 'form textarea[name="about"]',
    goalsInput : 'form textarea[name="goals"]',
    englishLevelInput : 'form select[name="englishLevel"]',
};
const dayReport = {
    moraleInfo : 'I am ok !',
    howManyHours : '4',
    howWasDay : 'It is miracle,it is working!',
};
const dayRepotrCelectors = {
    morale : 'form select[name="morale"]',
    hours : 'form input[name="hours"]',
    description :'text input[name="description"]',

};
module.exports = {URL ,dayReport,dayRepotrCelectors, URL_LOGIN,user,userAdmin,pageLogin,pageGROUP,URL_GROUP,pageRegisterSelectors,pageRegister} ;

