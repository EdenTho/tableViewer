import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from './Table';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileLoaderService {

  constructor(private http : HttpClient) { }

  filesUrl: string = "http://localhost:3000/files";

  getFiles(): Observable<string[]>{
    return this.http.get<string[]>(this.filesUrl);
  }

  getFile(fileName: string): Observable<Table[]>{
    return this.http.get<Table[]>(`${this.filesUrl}/${fileName}`);
  }


}
