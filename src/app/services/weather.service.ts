import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiUrl: string;
  appId: string;
  baseUrl: any;
  keywordChange = new Subject<number>();

  constructor(
    private http: HttpClient
  ) { 
    this.apiUrl = "https://api.openweathermap.org/data/2.5";
    this.appId  = "3d8b309701a13f65b660fa2c64cdc517";
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }

  getWeather(): Observable<any> {
    const url = `${this.apiUrl}/group?id=3191281,2759794,2643743,6455259,2761369&appid=${this.appId}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  getCityForecast(id: any): Observable<any> {
    const url = `${this.apiUrl}/forecast?id=${id}&appid=${this.appId}`
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
  
}


