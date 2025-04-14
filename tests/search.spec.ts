import { test, expect } from '@playwright/test';

test ('getBytext', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign In', { exact: true} ).click();
});

test ('filters', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.locator('//button', { hasText: 'Sign up'} ).click();
   // await page.locator('//div', { has: page.locator('//button[@appscrollto="aboutSection"]')}).click();
});

test ('locator.locator', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.locator('//nav').locator('//a').click();
    
});

test ('multiple elements', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign up').click();

    const inputs = page.locator('//input');
    const inputNumber = await inputs.count();

    for (let i = 0; i < inputNumber; i++) {
        const text = await inputs.nth(i).fill('Test' + i);
    }
});

test ('text', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    const elements = page.locator('//nav/button');
    const expectedText = ['About', 'Contacts'];
    const actualText = await elements.allInnerTexts();

    });

test ('fill', async ({page}) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.getByText('Sign In').click();
    await page.locator('//input[@id="signinEmail"]').fill('Test1');
    await page.locator('//input[@id="signinEmail"]').fill('Test2');
    await page.pause();
});
