import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OpenAPIV3 } from 'openapi-types';
import { Observable } from 'rxjs';

const linkGenerationUrl = 'api/add-links';

@Injectable({
  providedIn: 'root',
})
export class LinkGeneratorService {
  constructor(private http: HttpClient) {}

  addLinkDefinitions(input: string) {
    return this.http.post<OpenAPIV3.Document>(
      linkGenerationUrl,
      { input },
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }
}
