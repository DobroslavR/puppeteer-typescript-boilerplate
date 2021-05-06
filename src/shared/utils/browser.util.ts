import * as puppeteer from 'puppeteer';

interface BrowserOptions extends puppeteer.LaunchOptions {
  product?: puppeteer.Product
  extraPrefsFirefox?: Record<string, unknown>
}

const createBrowserAndPage = async (options?: BrowserOptions) => {
  const browser = await puppeteer.launch(options);

  const page = await browser.newPage();

  return { browser, page };
};

export default createBrowserAndPage;
