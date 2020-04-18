import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDiffModule } from 'ngx-diff';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TextLoaderComponent } from './text-loader/text-loader.component';
import { UrlLoaderComponent } from './url-loader/url-loader.component';

/**
 * Import specific languages for highlightingjs to avoid importing everything
 */
export function getHighlightLanguages() {
  return {
    json: () => import('highlight.js/lib/languages/json'),
  };
}

@NgModule({
  declarations: [AppComponent, FileUploadComponent, TextLoaderComponent, UrlLoaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    HighlightModule,
    NgxDiffModule,
    NgxSpinnerModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages(),
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
