import {Page, Alert} from 'ionic-angular/index';
import {NavController} from "ionic-angular/index";
import {Modal} from "ionic-angular/index";
import {ViewController} from "ionic-angular/index";


@Page({
    template: `
  <ion-navbar *navbar>
  <ion-title>Tab 1</ion-title>
</ion-navbar>

<ion-content padding class="page1">
  <h2>Welcome to Ionic!</h2>
  <button (click)="openModal()">open modal</button>
</ion-content>

  `,
})
export class Page1 {
    constructor(private nav:NavController) {

    }

    openModal() {
        let modal = Modal.create(MyModal);

        this.nav.present(modal);
    }
}


@Page({
    template: `
    <ion-toolbar>
        <ion-title>MyMocal</ion-title>
        <ion-buttons end>
        <button nav-pop>
            <ion-icon [name]="'close'"></ion-icon>
        </button>
    </ion-buttons>
    </ion-toolbar>
  <ion-content padding>
    <button danger (click)="closeMe()">CloseMe</button>
  </ion-content>`
})
export class MyModal {
    constructor(private nav:NavController, private viewCtrl:ViewController) {

    }

    closeMe() {
        let confirm = Alert.create({
            title: 'Close Me?',
            buttons: [
                {
                    text: 'Yes',
                    handler: () => {
                        this.viewCtrl.dismiss();
                    }
                },
                {
                    text: 'No'
                }
            ]
        });

        this.nav.present(confirm);
    }
}
