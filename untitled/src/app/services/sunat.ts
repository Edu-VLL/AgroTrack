import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SunatService {

  private apiUrl = 'https://api-codart.cgrt.org/api/v1/consultas/sunat/ruc';
  private token = 'bhdIHcQM3z1WPjO3tpFnvtp3DHmnwcFdD6YUEe7vMqAvS2qk4p9jP8BV7P1t';

  constructor(private http: HttpClient) { }

  consultarRuc(ruc: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(`${this.apiUrl}/${ruc}`, { headers });
  }
}
