import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { LinkGeneratorService } from './link-generator.service';

function formatJson(input: object) {
  return JSON.stringify(input, null, 2);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  result?: {
    numLinks: number;
    source: string;
    output: string;
    downloadHref: SafeUrl;
  };
  error?: string;

  constructor(
    private linkGenerator: LinkGeneratorService,
    private spinner: NgxSpinnerService,
    private sanitizer: DomSanitizer
  ) {}

  dataLoaded(input: string) {
    this.spinner.show();
    this.linkGenerator.addLinkDefinitions(input).subscribe(
      (result) =>
        (this.result = {
          source: formatJson(result.source),
          output: formatJson(result.result),
          numLinks: result.numLinks,
          downloadHref: this.getDownloadHref(result.result),
        }),
      (error) => (this.error = formatJson(error)),
      () => this.spinner.hide()
    );
  }
  reset() {
    this.error = undefined;
    this.result = undefined;
  }

  private getDownloadHref(input: object) {
    const json = formatJson(input);
    return this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(json));
  }
}
