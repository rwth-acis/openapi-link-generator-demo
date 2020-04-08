import { ReadVarExpr } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @ViewChild('labelImport')
  labelImport: ElementRef;

  @Output()
  dataLoaded: EventEmitter<string> = new EventEmitter();

  file?: File;

  uploadFile() {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.dataLoaded.emit(fileReader.result as string);
    };
    fileReader.readAsText(this.file);
  }

  onFileSelected(files: FileList) {
    this.file = files[0];
    this.labelImport.nativeElement.innerText = this.file.name;
  }
}
