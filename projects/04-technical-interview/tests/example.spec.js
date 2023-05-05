// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'
const CAT_IMAGE_PREFIX = 'https://cataas.com'

test('has fact', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const paragraph = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const paragraphText = await paragraph.textContent()
  const imageSrc = await image.getAttribute('src')

  console.log({ paragraphText, imageSrc })

  await expect(paragraphText).not.toBeNull()
  await expect(imageSrc?.startsWith(CAT_IMAGE_PREFIX)).toBeTruthy()
})
