import { $, $$, browser, ExpectedConditions } from 'protractor';

describe('When: I use the reading list feature', () => {
  it('Then: I should see my reading list', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        $('[data-testing="reading-list-container"]'),
        'My Reading List'
      )
    );
  });

  it('Then: I should see a list item being removed and the action undone', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );
    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('javascript');
    await form.submit();
    const readingListToggle = await $('[data-testing="toggle-reading-list"]');

    await readingListToggle.click();
    const readingListItemCount = await $$('[data-testing="list-item-title"]').count();
    await $('[data-testing="close-reading-list"]').click();
    await $('[data-testing="add-to-list"] button:enabled').click();
    await readingListToggle.click();
    expect($$('[data-testing="list-item-title"]').count()).toBeGreaterThan(readingListItemCount);
    $('[data-testing="remove-list-item"]').click();

    await browser.executeScript(" return await document.querySelector('.mat-simple-snackbar-action')").
    then((undoBtn: HTMLElement)=>{
        undoBtn.click();
      });
      expect($$('[data-testing="list-item-title"]').count()).toBeGreaterThan(readingListItemCount);

  });

});
