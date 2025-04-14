import { test, expect } from '@playwright/test';

test ('getBytext', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
});

test ('name field is required', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@id="signupName"]').click();
    await page.locator('//div/input[@id="signupName"]').blur();
    await expect (page.getByRole ('paragraph')).toHaveText('Name required');
    
    });

test ('name is required has red border-color', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@id="signupName"]').click();
    await page.locator('//div/input[@id="signupName"]').blur();
    await expect (page.getByRole ('paragraph')).toHaveText('Name required');
    await expect (page.locator('//div/input[@id="signupName"]')).toHaveCSS('border-color',`rgb(220, 53, 69)`);
        
    });


test ('name is required has red color', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@id="signupName"]').click();
    await page.locator('//div/input[@id="signupName"]').blur();
    await expect (page.getByRole ('paragraph')).toHaveText('Name required');
    await expect (page.getByRole ('paragraph')).toHaveCSS('color',`rgb(220, 53, 69)`);    
    });


test ('name is invalid', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@id="signupName"]').click();
    await page.locator('//div/input[@id="signupName"]').fill('1w');
    await page.locator('//div/input[@id="signupName"]').blur();
    await expect (page.locator('//div[@class="invalid-feedback"]')).toHaveText('Name is invalid');
    
    });


test ('name is invalid has red border-color', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@id="signupName"]').click();
    await page.locator('//div/input[@id="signupName"]').fill('1w');
    await page.locator('//div/input[@id="signupName"]').blur();
    await expect (page.locator('//div[@class="invalid-feedback"]')).toHaveText('Name is invalid');
    await expect (page.locator('//div/input[@id="signupName"]')).toHaveCSS('border-color',`rgb(220, 53, 69)`);

    });
    

test ('name is invalid text has red color', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@id="signupName"]').click();
    await page.locator('//div/input[@id="signupName"]').fill('1w');
    await page.locator('//div/input[@id="signupName"]').blur();
    await expect (page.locator('//div[@class="invalid-feedback"]')).toHaveText('Name is invalid');
    await expect (page.locator('//div[@class="invalid-feedback"]')).toHaveCSS('color',`rgb(220, 53, 69)`);
    });


test ('name has wrong length', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@id="signupName"]').click();
    await page.locator('//div/input[@id="signupName"]').fill('w');
    await page.locator('//div/input[@id="signupName"]').blur();
    await expect (page.locator('//div[@class="invalid-feedback"]')).toHaveText('Name has to be from 2 to 20 characters long');
        
    });

test ('name with wrong length has red border-color', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@id="signupName"]').click();
    await page.locator('//div/input[@id="signupName"]').fill('w');
    await page.locator('//div/input[@id="signupName"]').blur();
    await expect (page.locator('//div/input[@id="signupName"]')).toHaveCSS('border-color',`rgb(220, 53, 69)`);
            
    });    


test ('name with wrong length text has red color', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@id="signupName"]').click();
    await page.locator('//div/input[@id="signupName"]').fill('w');
    await page.locator('//div/input[@id="signupName"]').blur();
    await expect (page.locator('//div[@class="invalid-feedback"]')).toHaveText('Name has to be from 2 to 20 characters long');
    await expect (page.locator('//div[@class="invalid-feedback"]')).toHaveCSS('color',`rgb(220, 53, 69)`);
    
    });

test ('last name field is required', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@id="signupLastName"]').click();
    await page.locator('//div/input[@id="signupLastName"]').blur();
    await expect (page.getByRole ('paragraph')).toHaveText('Last name required');
        
    });

test ('last name is invalid', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@id="signupLastName"]').click();
    await page.locator('//div/input[@id="signupLastName"]').fill('s1');
    await page.locator('//div/input[@id="signupLastName"]').blur();
    await expect (page.getByRole ('paragraph')).toHaveText('Last name is invalid');
            
    });
    

test ('last name has wrong length', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@id="signupLastName"]').click();
    await page.locator('//div/input[@id="signupLastName"]').fill('qwertyuiopasdfghjklzx');
    await page.locator('//div/input[@id="signupLastName"]').blur();
    await expect (page.getByRole ('paragraph')).toHaveText('Last name has to be from 2 to 20 characters long');
                
    });


test ('last name border-color is red', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@id="signupLastName"]').click();
    await page.locator('//div/input[@id="signupLastName"]').fill('a');
    await page.locator('//div/input[@id="signupLastName"]').blur();
    await expect (page.getByRole ('paragraph')).toHaveText('Last name has to be from 2 to 20 characters long');
    await expect(page.locator('//div/input[@id="signupLastName"]')).toHaveCSS('border-color',`rgb(220, 53, 69)`);
    
    });    


test ('email is invalid', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@name="email"]').click();
    await page.locator('//div/input[@id="signupEmail"]').fill('1');
    await page.locator('//div/input[@id="signupEmail"]').blur();
    await expect (page.getByRole ('paragraph')).toHaveText('Email is incorrect');
                
    });   
    
test ('email is required', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@name="email"]').click();
    await page.locator('//div/input[@id="signupEmail"]').blur();
    await expect (page.getByRole ('paragraph')).toHaveText('Email required');
                    
    });           

test ('email border-color is red', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@name="email"]').click();
    await page.locator('//div/input[@id="signupEmail"]').blur();
    await expect(page.locator('//div/input[@name="email"]')).toHaveCSS('border-color',`rgb(220, 53, 69)`);
    });     

test ('password is invalid', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@name="password"]').click();
    await page.locator('//div/input[@name="password"]').fill('11');
    await page.locator('//div/input[@id="signupPassword"]').blur();
    await expect (page.getByRole ('paragraph')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
                    
    });     

test ('password is required', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@name="password"]').click();
    await page.locator('//div/input[@id="signupPassword"]').blur();
    await expect (page.getByRole ('paragraph')).toHaveText('Password required');
                        
    });    

test ('password border-color is red', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@name="password"]').click();
    await page.locator('//div/input[@id="signupPassword"]').blur();
    await expect (page.getByRole ('paragraph')).toHaveText('Password required');
    await expect(page.locator('//div/input[@name="password"]')).toHaveCSS('border-color',`rgb(220, 53, 69)`);   

    });  

test ('re-enter password is required', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@id="signupRepeatPassword"]').click();
    await page.locator('//div/input[@id="signupRepeatPassword"]').blur();
    await expect (page.getByRole ('paragraph')).toHaveText('Re-enter password required');
                            
    }); 

test ('re-enter password border-color is red', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@id="signupRepeatPassword"]').click();
    await page.locator('//div/input[@id="signupRepeatPassword"]').blur();
    await expect(page.locator('//div/input[@name="repeatPassword"]')).toHaveCSS('border-color',`rgb(220, 53, 69)`);                            
    }); 
    
test ('re-enter password color is red', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@id="signupRepeatPassword"]').click();
    await page.locator('//div/input[@id="signupRepeatPassword"]').blur();
    await expect (page.getByRole ('paragraph')).toHaveText('Re-enter password required');
    await expect (page.locator('//div[@class="invalid-feedback"]')).toHaveCSS('color',`rgb(220, 53, 69)`);
                                
    });  

test ('passwords has to be from 8 to 15 character long', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@id="signupPassword"]').click();
    await page.locator('//div/input[@id="signupPassword"]').fill('Italia@mechta82');
    await page.locator('//div/input[@id="signupRepeatPassword"]').click();
    await page.locator('//div/input[@id="signupRepeatPassword"]').fill('fdf');
    await page.locator('//div/input[@id="signupRepeatPassword"]').blur();
    await expect (page.getByRole ('paragraph')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
                                
    }); 

test ('passwords do not match', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@id="signupPassword"]').click();
    await page.locator('//div/input[@id="signupPassword"]').fill('Italia@mechta82');
    await page.locator('//div/input[@id="signupRepeatPassword"]').click();
    await page.locator('//div/input[@id="signupRepeatPassword"]').fill('Italia@mechta8');
    await page.locator('//div/input[@id="signupRepeatPassword"]').blur();
    await expect (page.getByRole ('paragraph')).toHaveText('Passwords do not match');
                                    
    });    

test ('re-enter password after cleaning is required', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    await page.locator('//div/input[@id="signupPassword"]').click();
    await page.locator('//div/input[@id="signupPassword"]').fill('Italia@mechta82');
    await page.locator('//div/input[@id="signupRepeatPassword"]').click();
    await page.locator('//div/input[@id="signupRepeatPassword"]').fill('Italia@mechta82');
    await page.locator('//div/input[@id="signupRepeatPassword"]').clear();
    await page.locator('//div/input[@id="signupRepeatPassword"]').blur();
    await expect (page.locator('//div[@class="invalid-feedback"]')).toHaveText('Re-enter password required');
                                            
    });
    
test ('register button is disabled', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
    
    await page.locator('//div/input[@id="signupName"]').click();
    await page.locator('//div/input[@id="signupName"]').fill('aqaOlha');
    await page.locator('//div/input[@id="signupLastName"]').click();
    await page.locator('//div/input[@id="signupLastName"]').fill('Kyrychenko');
    await page.locator('//div/input[@name="email"]').click();
    await page.locator('//div/input[@id="signupEmail"]').fill('olhakyrychenko21+1@gmail.com');
    await page.locator('//div/input[@id="signupPassword"]').click();
    await page.locator('//div/input[@id="signupPassword"]').fill('Italia@mechta82');
    await page.locator('//div/input[@id="signupRepeatPassword"]').click();
    await page.locator('//div/input[@id="signupRepeatPassword"]').fill('Italia@mechta8');
    await expect (page.getByText('Register',{ exact: true })).toBeDisabled();
    
    });

    
test ('register button is active', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
        
    await page.locator('//div/input[@id="signupName"]').click();
    await page.locator('//div/input[@id="signupName"]').fill('aqaOlha');
    await page.locator('//div/input[@id="signupLastName"]').click();
    await page.locator('//div/input[@id="signupLastName"]').fill('Kyrychenko');
    await page.locator('//div/input[@name="email"]').click();
    await page.locator('//div/input[@id="signupEmail"]').fill('olhakyrychenko21+1@gmail.com');
    await page.locator('//div/input[@id="signupPassword"]').click();
    await page.locator('//div/input[@id="signupPassword"]').fill('Italia@mechta82');
    await page.locator('//div/input[@id="signupRepeatPassword"]').click();
    await page.locator('//div/input[@id="signupRepeatPassword"]').fill('Italia@mechta82');
    await expect (page.getByText('Register',{ exact: true })).toBeEnabled();
        
    });


test ('user is created', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up', { exact: true} ).click();
        
    await page.locator('//div/input[@id="signupName"]').click();
    await page.locator('//div/input[@id="signupName"]').fill('aqaOlha');
    await page.locator('//div/input[@id="signupLastName"]').click();
    await page.locator('//div/input[@id="signupLastName"]').fill('Kyrychenko');
    await page.locator('//div/input[@name="email"]').click();
    await page.locator('//div/input[@id="signupEmail"]').fill('olhakyrychenko21+2@gmail.com');
    await page.locator('//div/input[@id="signupPassword"]').click();
    await page.locator('//div/input[@id="signupPassword"]').fill('Italia@mechta82');
    await page.locator('//div/input[@id="signupRepeatPassword"]').click();
    await page.locator('//div/input[@id="signupRepeatPassword"]').fill('Italia@mechta82');
    await page.getByText('Register',{ exact: true }).click();
    await expect (page.getByRole('heading', { name: 'Garage' })).toBeVisible();
   
    });
                