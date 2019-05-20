import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-daftarrakit',
  templateUrl: './daftarrakit.page.html',
  styleUrls: ['./daftarrakit.page.scss'],
})
export class DaftarrakitPage implements OnInit {
  rakit: any;
  constructor(private storage: Storage) {
  }

  async ngOnInit() {
    let rakit = await this.storage.get('rakit');
    this.rakit = JSON.parse(rakit);
    console.log(this.rakit);    
  }

}
