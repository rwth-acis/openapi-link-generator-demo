import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-loader',
  templateUrl: './text-loader.component.html',
  styleUrls: ['./text-loader.component.scss'],
})
export class TextLoaderComponent {
  @Output()
  dataLoaded: EventEmitter<string> = new EventEmitter();

  text = '';

  submit() {
    this.dataLoaded.emit(this.text);
  }
}
