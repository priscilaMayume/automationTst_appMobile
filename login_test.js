Feature('login');

Scenario('Login with sucess',  ({ I }) => {
    I.click("~email");
    I.clearField("~email");
    I.appendField("~email", "teste@teste.com");    
    I.fillField('~senha','123456')
    //click enter
    I.tap('~entrar')
    //check
    I.waitForElement('~codigo', 3)
    I.seeElement('~codigo')
});

Scenario('Login with error',  ({ I }) => {
    I.fillField('~email','teste@error.com')
    I.fillField('~senha','123456')
    //click enter
    I.tap('~entrar')
    //check
    I.waitForElement('~lognFail', 3)
    I.seeElement('~lognFail')
});
