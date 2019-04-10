import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RakitService {

  constructor(public http: Http, public toastController: ToastController) { }
  loadRakit(){
    return this.http.get('http://localhost:8081/api/rakit/');
  }
  addRakit(data){
    return this.http.get('http://localhost:8081/api/rakit/', data);
  }
  updateRakit(data){
    return this.http.get('http://localhost:8081/api/rakit/' + data.rakitid, data);
  }
  deleteRakit(rakitId){
    console.log(rakitId);
    return this.http.delete('http://localhost:8081/api/rakit/' + rakitId);
  }
  async message(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
