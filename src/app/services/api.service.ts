import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError, } from 'rxjs';
import { catchError, share  } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient
  ) {}


  private formatErrors(error: any) {
    //return  throwError(error.error);
    return  throwError(error);
  }

  post(path: string, object: any): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      object
    ).pipe(catchError(this.formatErrors)).pipe(share());
  }
}
