import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  private readonly http!: HttpClient;

  constructor(protected readonly injector: Injector) {
    if (injector == null || injector == undefined)
      throw new Error("Injector can't bee null");

    this.http = injector.get(HttpClient);
  }

  protected httpGet(url: string): Observable<any> {
    return this.http.get(url);
  }

  protected httpPost(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }

  protected httpPut(url: string, data: any): Observable<any> {
    return this.http.put(url, data);
  }

  protected httpDelete(url: string): Observable<any> {
    return this.http.delete(url);
  }
}
