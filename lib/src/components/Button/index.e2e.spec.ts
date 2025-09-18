import { expect, test } from '@playwright/test'

test.describe('Button component variants', () => {
  test('should render variant-primary button with the correct background-color', async ({
    page,
  }) => {
    await page.goto('/components/button')
    // Select the button with the variant-primary class
    const button = page.locator('button[data-testid="variant-primary"]')
    await expect(button).toBeVisible()

    const backgroundColor = await button.evaluate(el =>
      window.getComputedStyle(el).getPropertyValue('--backgroundColor')
    )
    const expectedColor = await button.evaluate(el =>
      window.getComputedStyle(el).getPropertyValue('--color-brand-40')
    )
    expect(backgroundColor).toBe(expectedColor)
  })
})
