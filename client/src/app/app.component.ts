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
  // filesList = ["file.json", "file2.json", "file3.json"];
  filesList: string[] = [];
//   fileInfo1 = {"tables": [
//     {
//         "title": "table title1",
//         "rows": 5,
//         "columns": 2,
//         "notes": "table nodes 1"
//     },
//     {
//         "title": "table title2",
//         "rows": 7,
//         "columns": 8,
//         "notes": "table nodes text"
//     }
// ]};
  chosenFileName = "";
  chosenFile?: Table[];
  chosenTable?: Table;

  constructor(private loader: FileLoaderService){}

  ngOnInit() {
      this.loader.getFiles().subscribe(response => {
          this.filesList = response;
      });
  }

  // tableList = ["table1", "table2"];

  fileClicked(file: string){
    this.chosenFileName = file;
    this.loader.getFile(file).subscribe(response => {
      this.chosenFile = response;
    })
  }

  tableClicked(table: Table){
    this.chosenTable = table;
  }


}