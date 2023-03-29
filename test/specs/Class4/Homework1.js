const { expect } = require("chai");



// TC-1: Verify current-temp is in between 45 and 55
/**
 * 1. Launch https://www.accuweather.com/
 * 2. Verify current-temp is in between 45 and 55
 */
describe('test verification', () => {

    it('Verify current-temp is in between 45 and 55', async () => {
        // 1. Launch https://www.accuweather.com/
        await browser.url('https://www.accuweather.com/');
        await browser.pause(5000);
        // 2. Verify current-temp is in between 45 and 55
        
        let currentTempElement = await $('//span[@class="recent-location-temp"]')
        let currentTempText = await currentTempElement.getText(); // ' 70°  '
        currentTempText = await currentTempText.trim(); // '70°'
        let currentTemp = await currentTempText.substring(0,currentTempText.length-1); // '70'
        currentTemp = Number(currentTemp); // 70
        expect(currentTemp > 45 && currentTemp < 55 , 'Current temp is NOT between 45 and 55').to.be.true;

    });


// TC-2: Verify error on empty login flow
/**
 * 1. Launch https:www.facebook.com/
 * 2. Click 'Log In' button
 * 3. Verify error msg is displayed
 *      The email or mobile number you entered isn’t connected to an account
 */

    it('Verify error on empty login flow', async () => {
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Click 'Log In' button
        const loginBtnElement = await $('//button[contains(text(), "Log")]');
        await loginBtnElement.click();
        await browser.pause(2000);

        /* 3. Verify error msg is displayed
        The email or mobile number you entered isn’t connected to an account
        */
        let errorMsgElement = await $('//div[text()="The email or mobile number you entered isn’t connected to an account. "]')
        let errorMsgText = await errorMsgElement.getText();
        expect (errorMsgText, 'Error msg is NOT displayed', 'The email or mobile number you entered isn’t connected to an account ', ).to.be.equal
    
    });

// TC-3: Verify the empty messenger login flow
/**
 * 1. Launch https:www.facebook.com/
 * 2. Click on 'Messenger' link
 * 3. Verify 'Keep me signed in' checkbox is NOT selected
 * 4. Click 'Log In' button
 * 5. Verify link -> "Find your account and log in" is displayed
 * 6. Verify 'Continue' button is enabled
 * 7. Verify 'Keep me signed in' checkbox is NOT selected
 * 8. Click 'Keep me signed in' checkbox
 * 9. Verify 'Keep me signed in' checkbox is selected
 * 
 */
    it.only('Verify error on empty login flow', async () => {
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Click on 'Messenger' link
        let messengerLink = await $('//a[@title="Check out Messenger."]');  
        await messengerLink.click();
        await browser.pause(2000);

        // 3. Verify 'Keep me signed in' checkbox is NOT selected
        let signedInCheckbox = await $('input[type*=checkbox]');
        let isSignedInCheckbox = await signedInCheckbox.isSelected()
        expect(isSignedInCheckbox, 'Checkbox is NOT selected').to.be.true;

        // 4. Click 'Log In' button

        let msngrLoginBtn = await $('#loginbutton');
        await msngrLoginBtn.click();
        await browser.pause(2000);

        // 5. Verify link -> "Find your account and log in" is displayed
        let verifyLink = await $('=Find your account and log in.')
        let isLinkDisplayed = await verifyLink.isDisplayed();
        expect(isLinkDisplayed, 'Link is displayed').to.be.false;
        await browser.pause(2000);


        // 6. Verify 'Continue' button is enabled
        let continueBtn  = await $('button[name*=gin]');
        const isContinueBtnEnabled = await continueBtn.isEnabled()
        expect(isContinueBtnEnabled, 'Continue button is NOT enabled').to.be.true;
        
        
        // 7. Verify 'Keep me signed in' checkbox is NOT selected
        
        //let isSignedInCheckbox = await signedInCheckbox.isSelected()
        expect(isSignedInCheckbox, 'Checkbox is NOT selected').to.be.true;

        // 8. Click 'Keep me signed in' checkbox
        let signInCheckbox =  await $('//input[starts-with(@type, "check")]')
        await signInCheckbox.click();

        // 9. Verify 'Keep me signed in' checkbox is selected
        let isSelectedCheckbox = await signInCheckbox.isSelected()
        expect(isSelectedCheckbox, 'Checkbox is selected').to.be.false;


    })

});