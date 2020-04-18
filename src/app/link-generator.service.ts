import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OpenAPIV3 } from 'openapi-types';

const linkGenerationUrl = 'api/add-links';

@Injectable({
  providedIn: 'root',
})
export class LinkGeneratorService {
  constructor(private http: HttpClient) {}

  addLinkDefinitions(input: string) {
    return this.http.post<{ numLinks: number; result: OpenAPIV3.Document; source: OpenAPIV3.Document }>(
      linkGenerationUrl,
      { input },
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }
}
