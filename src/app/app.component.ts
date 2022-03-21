import { Component } from '@angular/core';
import { Toast } from '@capacitor/toast';
import { Network } from '@capacitor/network';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  async ngOnInit()
  {
    const status = await Network.getStatus();
    await Toast.show({
      text: status.toString(),
      duration: 'long',
    });
  }
}
