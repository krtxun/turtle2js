import { Component, ViewChild } from '@angular/core';

import { FilePickerDirective, ReadFile, ReadMode } from 'ngx-file-helpers';

@Component( {
    selector: 'app-filebrowser',
    templateUrl: './filebrowser.component.html',
    styleUrls: ['./filebrowser.component.css']
} )
export class FilebrowserComponent {

    public readMode = ReadMode.text;
    public picked: ReadFile;
    public status: string;
    public readContents: string;

    @ViewChild(FilePickerDirective)
    private filePicker;

    onReadStart(fileCount: number) {
      this.status = `Reading the file...`;
    }

    onFilePicked(file: ReadFile) {
      this.picked = file;
      this.readContents = JSON.parse(file.content);
    }

    onReadEnd(fileCount: number) {
      this.filePicker.reset();
    }
}
