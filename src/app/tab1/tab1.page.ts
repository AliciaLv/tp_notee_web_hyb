import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  latitude: number;
  longitude: number;
  coordonnee: number[];

  constructor() {
    this.printCurrentPosition();
  }

  private async printCurrentPosition()
  {
    const coordinate = await Geolocation.getCurrentPosition();
    this.latitude = coordinate.coords.latitude;
    this.longitude = coordinate.coords.longitude;
    this.coordonnee = [this.latitude, this.longitude];
    this.saveCoordonnee(this.coordonnee);
  }

  private async saveCoordonnee(coordonnee:number[]) 
  { 
    const fileName = new Date().getTime();
    await Filesystem.writeFile({
      path: fileName.toString(),
      data: coordonnee.toString(),
      directory: Directory.Data

    });
  }

}
