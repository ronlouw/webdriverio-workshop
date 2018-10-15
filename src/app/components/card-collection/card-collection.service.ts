import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../card';
import { CARDS } from './card-collection';

@Injectable({
  providedIn: 'root'
})
export class CardCollectionService {
  filteredCardCollection$: BehaviorSubject<Card[]> = new BehaviorSubject<Card[]>(CARDS);

  filter(value) {
    // random timeout for testing purpose
    const timeout = Math.floor(Math.random() * Math.floor(5) * 1000);

    if (!value.length) {
      setTimeout(() => this.filteredCardCollection$.next(CARDS), timeout);
    } else if (value.length > 2) {
      console.log(2);
      setTimeout(() => this.filteredCardCollection$.next(CARDS.filter(card => value.includes(card.title))), timeout);
    }
  }

  get collection(): BehaviorSubject<Card[]> {
    return this.filteredCardCollection$;
  }

}