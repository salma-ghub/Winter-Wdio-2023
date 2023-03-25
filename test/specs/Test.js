const { expect } = require("chai");

describe('WebDriver IO Code Test', () => {

    //Question - 1: (50-points)
    /**
     * Testcase: Verify rewards form is empty and Continue button is disabled
     * Steps:
     * 1. Launch hotels.com
     * 2. Click on Learn about Hotels.com Rewards
     * 3. -> Verify Hotels Rewards opened in a new window
     * 4. Click on Join Now
     * 5. -> Verify Form is blank
     * 6. -> Verify Continue button is NOT enabled
     */
    it('Verify rewards form is empty and Continue button is disabled', async () => {

        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com/')
        await browser.pause(3000);

        // 2. Click on Learn about Hotels.com Rewards
        const rewardsLink = await $('=Learn about Hotels.com Rewards');
        await rewardsLink.scrollIntoView(false);
        await browser.pause(3000);
        await rewardsLink.click();
        await browser.pause(5000);

        // 3. -> Verify Hotels Rewards opened in a new window
        const connectedHandle = await browser.getWindowHandle();
        console.log(`connectedHandle -> ${connectedHandle}\n\n`);
  
        const allHandles = await browser.getWindowHandles();

        
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const title = await browser.getTitle();
            if (title.localeCompare('Rewards') === 0) {
                break;
            }
        }
        // 4. Click on Join Now
        await browser.pause(3000);
        let joinNowBtn = await $('//a[text()="Join Now"]')
        await joinNowBtn.click();
        await browser.pause(5000);

        // 5. -> Verify Form is blank
        const emailField = await $('#signupFormEmailInput'); 
        let emailValue = emailField.getAttribute(value);
        emailFieldIsBlank = emailValue.localeCompare('') === 0
        expect(emailFieldIsBlank, 'Email field is not blank').to.be.true;
        await browser.pause(3000);
        
        const firstNameField = await $('#signupFormFirstNameInput');
        let firstNameValue = firstNameField.getAttribute(value);
        firstNameFieldIsBlank = firstNameValue.localeCompare('') === 0
        expect(firstNameFieldIsBlank, 'First Name field is not blank').to.be.true;
        await browser.pause(3000);

        const lastNameField = await $('#signupFormLastNameInput');
        let lastNameValue = lastNameField.getAttribute(value);
        lastNameFieldIsBlank = lastNameValue.localeCompare('') === 0
        expect(LastNameFieldIsBlank, 'Last name field is not blank').to.be.true;
        await browser.pause(3000);
        
        const passwordField = await $('#signupFormPasswordInput');
        let passwordValue = passwordField.getAttribute(value);
        passwordFieldIsBlank = passwordValue.localeCompare('') === 0
        expect(passwordFieldIsBlank, 'Password field is not blank').to.be.true;
        await browser.pause(3000);

         
        // 6. -> Verify Continue button is NOT enabled
        const continueBtn = await $('#signupFormSubmitButton');
        const isContinueBtnEnabled = continueBtn.isEnabled();
        expect(isContinueBtnEnabled, 'Continue button is enabled').to.be.false;
        await browser.pause(30000);
    });

    

    // Question - 2: (50-points)
    /**
     * Testcase: Verify past dates are disabled in Calendar
     * Steps:
     * 1. Launch hotels.com
     * 2. Click on Dates section
     * 3. If not already, go to current month
     * 4. -> Verify all past dates are disabled
     */
    it('Verify past dates are disabled in Calendar', async () => {
        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com/');
        await browser.pause(3000);
        // 2. Click on Dates section
        const datesElement = await $('button[data-name=date_form_field]');
        await datesElement.click();
        await browser.pause(5000);



    });
    


});