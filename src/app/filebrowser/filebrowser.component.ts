import { Component, ViewChild } from '@angular/core';

import { FilePickerDirective, ReadFile, ReadMode } from 'ngx-file-helpers';

@Component( {
    selector: 'app-filebrowser',
    templateUrl: './filebrowser.component.html',
    styleUrls: ['./filebrowser.component.css']
} )
export class FilebrowserComponent {

    public fileContent;

    constructor() {
        this.fileContent;
    }

    fileLoader( $event ): void {
        console.log( $event );
        this.loadFile( $event.target );
    }

    loadFile( inputValue: any ): void {
        var file: File = inputValue.files[0];
        var fileReader: FileReader = new FileReader();
        var fileType = inputValue.parentElement.id;
        fileReader.onloadend = ( e ) => {
            console.log( fileReader.result );
            this.fileContent = fileReader.result;
        }
        fileReader.readAsText(file);
        console.log(this.fileContent);
    }
}
