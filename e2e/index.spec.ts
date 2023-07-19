// import { chromium } from 'playwright';
// import { render, screen } from '@testing-library/react';
// import Dog from "./app/page";

// describe('Example Test', () => {
//     let browser;
//     let page;
  
//     beforeAll(async () => {
//       browser = await chromium.launch();
//     });
  
//     afterAll(async () => {
//       await browser.close();
//     });
  
//     beforeEach(async () => {
//       page = await browser.newPage();
//     });
  
//     afterEach(async () => {
//       await page.close();
//     });
  
//     test('Should render the ExampleComponent and verify text', async () => {
//       await page.setContent(render(<Dog />).container.innerHTML);
  
//       const headingElement = await page.waitForSelector('h1');
//       const headingText = await headingElement.innerText();
  
//       expect(headingText).toBe('Hello, World!');
//     });
//   });