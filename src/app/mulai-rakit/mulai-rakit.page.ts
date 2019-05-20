import { Component, OnInit } from '@angular/core';
import { RakitService } from 'src/app/rakit.service';
import { Response } from '@angular/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-mulai-rakit',
  templateUrl: './mulai-rakit.page.html',
  styleUrls: ['./mulai-rakit.page.scss'],
})
export class MulaiRakitPage {
  saveRakit: any;
  dataproc: any;
  datavga: any;
  datamobo: any;
  dataram: any;
  datassd: any;
  datapsu: any;
  datacasing: any;
  datacooler: any;
  datakeyboard: any;
  datamonitor: any;
  datafan: any;
  datamouse: any;
  datahdd: any;
  procValue = '1'
  vgaValue = '1'
  casingValue = '1'
  coolerValue = '1'
  fanValue = '1'
  hddValue = '1'
  ssdValue = '1'
  keyboardValue = '1'
  moboValue = '1'
  monitorValue = '1'
  mouseValue = '1'
  psuValue = '1'
  ramValue = '1'
  procSelected = {
    price: '0',
    tdp: '0'
  };
  vgaSelected = {
    price: '0',
    tdp: '0'
  };
  casingSelected = {
    price: '0',
    tdp: '0'
  };
  coolerSelected = {
    price: '0',
    tdp: '0'
  };
  fanSelected = {
    price: '0',
    tdp: '0'
  };
  hddSelected = {
    price: '0',
    tdp: '0'
  };
  ssdSelected = {
    price: '0',
    tdp: '0'
  };
  keyboardSelected = {
    price: '0',
    tdp: '0'
  };
  moboSelected = {
    price: '0',
    tdp: '0'
  };
  monitorSelected = {
    price: '0',
    tdp: '0'
  };
  mouseSelected = {
    price: '0',
    tdp: '0'
  };
  psuSelected = {
    price: '0',
    tdp: '0'
  };
  ramSelected = {
    price: '0',
    tdp: '0'
  };
  total = '0';
  totalTdp = '0';
 // tambah storage dulu lah, tambahin, aku mau copy file ke laptop rizky dulu
 // udah tambah tadi, yang sqlite itu bukan? oh udah tapi belum tambah di module | app.module.ts?
  constructor(public rakitService: RakitService, private storage: Storage) {
    this.loadproc();
    this.loadvga();
    this.loadcasing();
    this.loadfan();
    this.loadcooler();
    this.loadhdd();
    this.loadkeyboard();
    this.loadmobo();
    this.loadmonitor();
    this.loadmouse();
    this.loadpsu();
    this.loadram();
    this.loadssd();
  }
  loadproc() {
    this.rakitService.loadproc().subscribe((response: Response) => {
      this.dataproc = response.json();
    })
  }
  loadvga() {
    this.rakitService.loadvga().subscribe((response: Response) => {
      this.datavga = response.json();
    })
  }
  loadcasing() {
    this.rakitService.loadcasing().subscribe((response: Response) => {
      this.datacasing = response.json();
    })
  }
  loadcooler() {
    this.rakitService.loadcooler().subscribe((response: Response) => {
      this.datacooler = response.json();
    })
  }
  loadfan() {
    this.rakitService.loadfan().subscribe((response: Response) => {
      this.datafan = response.json();
    })
  }
  loadhdd() {
    this.rakitService.loadhdd().subscribe((response: Response) => {
      this.datahdd = response.json();
    })
  }
  loadkeyboard() {
    this.rakitService.loadkeyboard().subscribe((response: Response) => {
      this.datakeyboard = response.json();
    })
  }
  loadmobo() {
    this.rakitService.loadmobo().subscribe((response: Response) => {
      this.datamobo = response.json();
    })
  }
  loadmonitor() {
    this.rakitService.loadmonitor().subscribe((response: Response) => {
      this.datamonitor = response.json();
    })
  }
  loadmouse() {
    this.rakitService.loadmouse().subscribe((response: Response) => {
      this.datamouse = response.json();
    })
  }
  loadpsu() {
    this.rakitService.loadpsu().subscribe((response: Response) => {
      this.datapsu = response.json();
    })
  }
  loadram() {
    this.rakitService.loadram().subscribe((response: Response) => {
      this.dataram = response.json();
    })
  }
  loadssd() {
    this.rakitService.loadssd().subscribe((response: Response) => {
      this.datassd = response.json();
    })
  }
  printlog() {
    // kalau datanya disimpan pakai storage, karna berbentuk object harus pakai
    // this.storage.set('dataRakit', JSON.stringify('data berbentuk objek'));
    const harga = [this.procSelected, this.vgaSelected, this.coolerSelected, this.casingSelected, this.fanSelected, this.hddSelected, this.keyboardSelected, this.moboSelected, this.mouseSelected, this.monitorSelected, this.psuSelected, this.ramSelected, this.ssdSelected];
    // hapus yang ga pakai tdp, ha pus dulu
    const tdp = [this.procSelected, this.vgaSelected, this.coolerSelected, this.fanSelected, this.hddSelected, this.moboSelected, this.ramSelected, this.ssdSelected];
    //agak ribet
    const a = harga.map((el, index) => {
      if (index === 0) {
        return parseInt(el.price) * parseInt(this.procValue);
      } else if (index === 1) {
        return parseInt(el.price) * parseInt(this.vgaValue);
      } else if (index === 2) {
        return parseInt(el.price) * parseInt(this.coolerValue);
      } else if (index === 3) {
        return parseInt(el.price) * parseInt(this.casingValue);
      } else if (index === 4) {
        return parseInt(el.price) * parseInt(this.fanValue);
      } else if (index === 5) {
        return parseInt(el.price) * parseInt(this.hddValue);
      } else if (index === 6) {
        return parseInt(el.price) * parseInt(this.keyboardValue);
      } else if (index === 7) {
        return parseInt(el.price) * parseInt(this.moboValue);
      } else if (index === 8) {
        return parseInt(el.price) * parseInt(this.mouseValue);
      } else if (index === 9) {
        return parseInt(el.price) * parseInt(this.monitorValue);
      } else if (index === 10) {
        return parseInt(el.price) * parseInt(this.psuValue);
      } else if (index === 11) {
        return parseInt(el.price) * parseInt(this.ramValue);
      } else if (index === 12) {
        return parseInt(el.price) * parseInt(this.ssdValue);
      }
    });
    const b = tdp.map(el => {
      if (el.tdp) {
        return parseInt(el.tdp);
      }
    });
    const total = a.reduce((total, num) => total + num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    const totalTdp = b.reduce((total, num) => total + num);

    this.total = total.toString();
    this.totalTdp = totalTdp.toString();

    this.saveRakit = {
      data: harga,
      totalHarga: total,
      totalTdp: totalTdp
    };
  }

  async addToRakit() {
    let rakit = await this.storage.get('rakit');
    if (rakit) {
      const newRakit = JSON.parse(rakit);
      newRakit.dataRakit.push(this.saveRakit);
      return await this.storage.set('rakit', JSON.stringify(newRakit));
    }
    rakit = {
      dataRakit: [this.saveRakit]
    };
    return await this.storage.set('rakit', JSON.stringify(rakit));
  }

  reset(val) {
    if (val == 'proc') {
      this.procSelected = {
        price: '0',
        tdp: '0'
      };
    } else if (val == 'vga') {
      this.vgaSelected = {
        price: '0',
        tdp: '0'
      };
    } else if (val == 'casing') {
      this.casingSelected = {
        price: '0',
        tdp: '0'
      };
    } else if (val == 'cooler') {
      this.coolerSelected = {
        price: '0',
        tdp: '0'
      };
    } else if (val == 'fan') {
      this.fanSelected = {
        price: '0',
        tdp: '0'
      };
    } else if (val == 'hdd') {
      this.hddSelected = {
        price: '0',
        tdp: '0'
      };
    } else if (val == 'keyboard') {
      this.keyboardSelected = {
        price: '0',
        tdp: '0'
      };
    } else if (val == 'mobo') {
      this.moboSelected = {
        price: '0',
        tdp: '0'
      };
    } else if (val == 'monitor') {
      this.monitorSelected = {
        price: '0',
        tdp: '0'
      };
    } else if (val == 'mouse') {
      this.mouseSelected = {
        price: '0',
        tdp: '0'
      };
    } else if (val == 'psu') {
      this.psuSelected = {
        price: '0',
        tdp: '0'
      };
    } else if (val == 'ram') {
      this.ramSelected = {
        price: '0',
        tdp: '0'
      };
    } else if (val == 'ssd') {
      this.ssdSelected = {
        price: '0',
        tdp: '0'
      };
    }
  }
}
