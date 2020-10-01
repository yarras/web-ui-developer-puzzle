import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, markAsFinished } from '@tmo/books/data-access';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store) {}
  isFinished(item){
    this.store.dispatch(markAsFinished({item}));
  }


  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }
}
