import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UrlLoaderComponent } from './url-loader/url-loader.component';
import { TextLoaderComponent } from './text-loader/text-loader.component';

/**
 * Import specific languages for highlightingjs to avoid importing everything
 */
export function getHighlightLanguages() {
  return {
    json: () => import('highlight.js/lib/languages/json'),
  };
}

@NgModule({
  declarations: [AppComponent, FileUploadComponent, UrlLoaderComponent, TextLoaderComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule, NgbModule, HighlightModule],
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
