import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileLoaderService } from './file-loader.service';
import { Table } from './Table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'table-viewer';
  files: string[] = [];
  chosenFileName = "";
  chosenFile?: Table[];
  chosenTable?: Table;

  constructor(private loader: FileLoaderService){}

  ngOnInit() {
      this.loader.getFiles().subscribe(response => {
          this.files = response;
      });
  }

  fileClicked(file: string){
    if(this.chosenFileName){
      this.chosenFileName = "";
      this.chosenTable = undefined;
    }
    this.chosenFileName = file;
    this.loader.getFile(file).subscribe(response => {
      this.chosenFile = response;
    })
  }

  tableClicked(table: Table){
    if(this.chosenTable){
      this.chosenTable = undefined;
    }
    this.chosenTable = table;
  }


}