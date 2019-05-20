import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RakitService {

  constructor(public http: Http, public toastController: ToastController) { }
  loadproc(){
    return this.http.get('https://buildpc.herokuapp.com/api/proc');
  }
  loadvga(){
    return this.http.get('https://buildpc.herokuapp.com/api/vga');
  }
  loadcasing(){
    return this.http.get('https://buildpc.herokuapp.com/api/casing');
  }
  loadcooler(){
    return this.http.get('https://buildpc.herokuapp.com/api/cooler');
  }
  loadfan(){
    return this.http.get('https://buildpc.herokuapp.com/api/fan');
  }
  loadhdd(){
    return this.http.get('https://buildpc.herokuapp.com/api/hdd');
  }
  loadkeyboard(){
    return this.http.get('https://buildpc.herokuapp.com/api/keyboard');
  }
  loadmonitor(){
    return this.http.get('https://buildpc.herokuapp.com/api/monitor');
  }
  loadmobo(){
    return this.http.get('https://buildpc.herokuapp.com/api/mobo');
  }
  loadmouse(){
    return this.http.get('https://buildpc.herokuapp.com/api/mouse');
  }
  loadpsu(){
    return this.http.get('https://buildpc.herokuapp.com/api/psu');
  }
  loadram(){
    return this.http.get('https://buildpc.herokuapp.com/api/ram');
  }
  loadssd(){
    return this.http.get('https://buildpc.herokuapp.com/api/ssd');
  }
  
  async message(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
