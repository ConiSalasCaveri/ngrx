import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NgrxTestService {
  constructor(private httpClient: HttpClient) {}

  getAnimals() {
    return this.httpClient.get<any>('./assets/data/assigned-supplier.json');
  }
}
