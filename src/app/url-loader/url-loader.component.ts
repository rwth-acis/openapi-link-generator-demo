import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-url-loader',
  templateUrl: './url-loader.component.html',
  styleUrls: ['./url-loader.component.scss'],
})
export class UrlLoaderComponent {
  @Output()
  dataLoaded: EventEmitter<string> = new EventEmitter();

  placeholderUri = 'https://requirements-bazaar.org/bazaar/swagger.json';
  downloadError = false;
  url?: string;

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}

  submit() {
    this.spinner.show();
    this.http.get(this.url || this.placeholderUri, { responseType: 'text' }).subscribe(
      (result) => {
        // this.spinner.hide();
        this.dataLoaded.emit(result);
      },
      (_error) => {
        this.spinner.hide();
        this.downloadError = true;
      }
    );
  }
}
