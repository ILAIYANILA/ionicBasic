import { App, Platform } from 'ionic-angular/index';
import { TabsPage } from './tabs.ts';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  constructor(private platform: Platform) {
    this.rootPage = TabsPage;
  }
}
