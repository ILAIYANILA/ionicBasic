import {Page} from 'ionic-angular/index';
import {HomePage} from './home.ts';
import {Page1} from './page1.ts';


@Page({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Page1;
  tab2Root: any = HomePage;


}
