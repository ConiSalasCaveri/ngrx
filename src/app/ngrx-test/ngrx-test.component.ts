import { Component, OnInit } from '@angular/core';
import { NgrxTestService } from './ngrx-text.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset, changeName } from './ngrx-test.actions';
import { Person } from './ngrx-test.reducer';

@Component({
  selector: 'app-ngrx-test',
  templateUrl: './ngrx-test.component.html',
  styleUrls: ['./ngrx-test.component.scss']
})
export class NgrxTestComponent implements OnInit {

  count$: Observable<number>;
  person$: Observable<Person>;

  constructor(private store: Store<{ count: number }>) {
    // this.count$ = store.pipe(select('count'));
    this.person$ = store.pipe(select(fromRoot()));
  }

  ngOnInit() {

  }

  changeName(_name: string) {
    const person: Person = {
      name: _name,
      age: 0
    };
    this.store.dispatch(changeName({ person }));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
