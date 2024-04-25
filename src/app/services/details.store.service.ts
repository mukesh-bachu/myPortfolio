import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, map, shareReplay, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DetailsStoreService {

  private subject = new BehaviorSubject<any[]>([]);

  details$ : Observable<any[]> = this.subject.asObservable();


  constructor() { }

  filterByCategory(category: string): Observable<any[]> {
    return this.details$
        .pipe(
            map(details =>
              details.filter(detail => detail.category == category)
            )
        )
}

}
