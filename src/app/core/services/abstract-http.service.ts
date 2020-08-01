import {HttpClient} from '@angular/common/http';
import {delay, take, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

export class AbstractHttpService<T> {

  constructor(protected  httpClient: HttpClient,
              private SERVICE_URL: string) {
  }

  list() {
    return this.httpClient.get<T[]>(`${this.SERVICE_URL}`)
      .pipe(delay(2000),
        tap(console.log));
  }

  save(record: T) {
    return this.httpClient.post(this.SERVICE_URL, record).pipe(take(1));
  }

  delete(id) {
    return this.httpClient.delete(`${this.SERVICE_URL}/${id}`).pipe(take(1));
  }

  update(record: T) {
    return this.httpClient.put(`${this.SERVICE_URL}`, record).pipe(take(1));
  }

  findById(id){
    return this.httpClient.get(`${this.SERVICE_URL}/${id}`).pipe(take(1));
  }

}
