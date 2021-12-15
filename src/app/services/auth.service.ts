import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { 
  }

  token:string | null = this.getToken();
  getToken() : string {
    return localStorage.getItem('token') || '';
  }
  setToken(token:string) : void {
    localStorage.setItem('token', token);
  }

  redirectUrl: string | null = null;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.setToken('123456');
      })
    );
  }

  logout(): void {
    this.setToken('');
  }
}
