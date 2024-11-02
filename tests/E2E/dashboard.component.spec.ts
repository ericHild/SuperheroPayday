import { test, expect } from '@playwright/test';

test.beforeEach( async ({page}) => {
    await page.goto('http://localhost:4200/rhDashboard');
});

/*test('Page has title', async ({ page }) => {
    const title_page_tag_content = 'Super-héros RH Dashboard';  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(title_page_tag_content);
});*/

test('Page has title', async ({ page }) => {
    const title = 'Dashboard';
    await expect(page.getByTestId('headlineDashboard')).toBeVisible();
    await expect(page.getByTestId('headlineDashboard')).toContainText(title);
});

test.describe('INPUT SEARCH', () => {

    /**
     * Ma réflexion de test
     *  A : Vérifier de la présence du champs et du label
     *  B : Effectuer une saisie dans le champs de recherche
     *  C : Vérifier que ma méthode findHero() est bien appelée
     *      C.1 : En vérifiant que la taille de la liste des héros à changée
     */
    test.describe('UI', () => {

        test('Page has Label + input to search hero', async ({ page }) => {

            await expect(page.getByTestId('search-label')).toBeVisible();
            await expect(page.getByTestId('search-label')).toContainText('Trouver un super héros');

            const searchInput = page.locator('[data-testid="search-input"]');
            await expect(searchInput).toBeVisible();
            await expect(searchInput).toHaveAttribute('placeholder', 'Ex: batman'); // pour acceder au placeholder il faut passer par locator

        });
       
    });

    test.describe('BEHAVIOR', () => {

        test('Should filter hero list', async ({ page }) => {

            const herosList = page.locator('.herosList li');
            const numberItems = await herosList.count();
            expect(numberItems).toBe(3);

            const searchValue = 'batman';
            const searchInput = page.getByTestId('search-input');
            await searchInput.fill(searchValue);
            await expect(searchInput).toHaveValue('batman');

            const herosListFilterd = page.locator('.herosList li');
            const numberItemsFiltered = await herosListFilterd.count();
            expect(numberItemsFiltered).toBe(1);
            
        });
    
    });

});