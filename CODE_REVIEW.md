#### Code Review

*	Naming conventions for few elements do not follow standard practices


  ```
       <div class="book--content--info">
  ```


*	Use ternary operator where ever suitable

*	Subscriber does not have error hook, exception cannot be logged/handled

  ```
      File:book-search.component.ts

      this.store.select(getAllBooks).subscribe(books => {
         this.books = books;
      });
  ```

*	Do not import Angular lifecycle hooks without utilizing it (keeping code bundle size in mind)

  ```
       File: total-count.component.ts

       ngOnInit(): void {}
  ```

*	File: books.effect.spec.ts, we can use promises instead of done() for a better control.

*	File: book.actions.ts, Null check handling missing for searchBooksSuccess.Spec files will fail in negative scenarios

*	Template has a function binding that converts date format. We can use angular date pipe to change the format.

  ```
      File book-search.component.html

      <strong>Published:</strong> {{ formatDate(b.publishedDate) }}

  ```

*	Try not to use spread operator when Object.assign() can do the job as it affects performance.


#### Feature suggestion

* A clear button can be provided for the search box for better user experience.
* Application can be made responsive for smaller screens.

#### Accessibility

###### Lighthouse

* Search button do not have an accessible name
* Contrast  Background and foreground colors do not have a sufficient contrast ratio.


###### Manual Check

* Font size and weight to improve visual legibility
* Highlight element on hover
* Name was missing for close button of Reading list.
