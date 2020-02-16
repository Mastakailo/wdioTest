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
const pageLoginText = {
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
    howWasDay : 'It is miracle,it is working! But like always i forgot smal detayl , I need use more symbols !  ',
};
const newGroupInfo = {
    name : 'Ev company',
    description : 'the best man in the world !',
    accsesType : 'Members',
}
const newGproupSelectors = {
    groupButtom : 'li a[href="/group"]',
    newGproupButtom : 'div a[href="/group/create"]',
    inputGroupName : 'form input[name="name"]',
    accsesTypeSelector :'div select[name="accessType"]',
    descriptionGroup : 'div input[name="description"]',
    createButton : 'div button[type="submit"]'
};
const dayRepotrCelectors = {
    dayReportButtom : 'li a[href="/diary"]',
    newDayReport : 'div a[class="btn btn-secondary"]',
    iNeedHelp : 'div input[id="input-0"]',
    morale : 'form select[name="morale"]',
    hours : 'form input[name="hours"]',
    description :'form textarea[name="description"]',

};
module.exports = {URL,newGproupSelectors,newGroupInfo, newGproupSelectors,pageConfirmation,dayReport,dayRepotrCelectors, URL_LOGIN,user,userAdmin,pageLogin: pageLoginText,pageGROUP,URL_GROUP,pageRegisterSelectors,pageRegister} ;

