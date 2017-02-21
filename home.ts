import { Page, NavController } from 'ionic-angular/index';
import { Page1 } from './page1.ts'


@Page({
  templateUrl:"home.html"
})
export class HomePage {
  
  greeting: string;
  
  constructor(private nav: NavController) {
		this.greeting = "Thanks for your demo and thanks for using Ionic!"
	}
	
	goToPage1() {
	  this.nav.push(Page1);
	}


}
