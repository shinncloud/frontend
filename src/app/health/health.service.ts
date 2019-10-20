import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Health } from './health';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public getHealth(): Observable<Health> {
    return this.http.get<Health>('/health').pipe(
      map((item: any) => new Health(
        item.success,
        item.status,
        item.url,
        item.base_url,
        item.url_root,
        item.method,
        item.data,
        item.host,
        item.platform,
        item.node,
        item.counter
      ))
    );
  }
}
