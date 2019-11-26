import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError, } from 'rxjs';
import { catchError, share  } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable()
export class PdfService {
  constructor(
    private apiService: ApiService
  ) {}

  endpoint = '/generateChart';

  private formatErrors(error: any) {
    //return  throwError(error.error);
    return  throwError(error);
  }

  postPdf(object: any): Observable<any> {
    return this.apiService.post(this.endpoint,object).pipe(catchError(this.formatErrors)).pipe(share());
  }
}
