import { test, expect } from '@playwright/test';

test.beforeEach( async ({page}) => {
  await page.goto('http://localhost:4200/welcome');
});

test('Page has title', async ({ page }) => {
    const title_page_tag_content = 'Super-héros RH Dashboard';  
    await expect(page).toHaveTitle(title_page_tag_content);
});

test('Page has h1 welcome title', async ({ page }) => {
  const welcolme_title = 'Bienvenue sur votre application RH de gestion des supers héros';
  await expect(page.getByTestId('headline')).toContainText(welcolme_title);
});

test.describe('navigation', () => {
  
  const redirect_dashboard_link = 'Go RH Dashboard';
  
  test('Page has link redirect to on dashboard page', async ({ page }) => {      
    await expect(page.getByTestId('redirectDashboard')).toBeVisible();
    await expect(page.getByTestId('redirectDashboard')).toContainText(redirect_dashboard_link);
  });

  test('Redirect on dashboard after clicking on the link', async ({ page }) => {
    await page.getByText(redirect_dashboard_link).click();
    await expect(page).toHaveURL('http://localhost:4200/rhDashboard');
  });

});