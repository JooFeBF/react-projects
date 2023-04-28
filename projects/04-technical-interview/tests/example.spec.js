// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('has fact', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const paragraph = await page.getByRole('paragraph')
  const img = await page.getByRole('img')

  const paragraphText = await paragraph.textContent()
  const imgSrc = await img.getAttribute('src')

  await expect(paragraphText).not.toBeNull()
  await expect(imgSrc).not.toBeNull()
})
