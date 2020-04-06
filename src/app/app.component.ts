import { Component } from '@angular/core';
import { LinkGeneratorService } from './link-generator.service';
import { OpenAPIV3 } from 'openapi-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  output?: string;
  error?: string;

  constructor(private linkGenerator: LinkGeneratorService) {}

  dataLoaded(input: string) {
    this.linkGenerator.addLinkDefinitions(input).subscribe(
      (result) => (this.output = JSON.stringify(result, null, 2)),
      (error) => (this.error = JSON.stringify(error, null, 2))
    );
  }
  reset() {
    this.error = undefined;
    this.output = undefined;
  }
}
