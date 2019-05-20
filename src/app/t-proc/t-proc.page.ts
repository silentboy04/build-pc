import { Component, OnInit } from '@angular/core';
import { RakitService } from 'src/app/rakit.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-t-proc',
  templateUrl: './t-proc.page.html',
  styleUrls: ['./t-proc.page.scss'],
})
export class TProcPage {
  data: any;
  constructor(public rakitService: RakitService){
    this.loadproc();
  }
  loadproc(){
      this.rakitService.loadproc().subscribe((response: Response) => {
        this.data = response.json();
        console.log(this.data);
      })
    }
  }
