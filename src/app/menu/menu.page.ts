import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router) { }
  public addition = false;
  public minus = false;
  public times = false;
  public division = false;
  public easy = false;
  public medium = false;
  public hard = false;
  data: any;
  

  ngOnInit() {
  }

  startBtn() {
    this.data = {
      add: this.addition,
      min: this.minus,
      tim: this.times,
      div: this.division,
      easy: this.easy,
      medium: this.medium,
      hard: this.hard
    }
    let dataString = JSON.stringify(this.data);
    if (this.addition || this.minus || this.times || this.division) {
      if (this.easy || this.medium || this.hard) {
    
        this.router.navigate(['/gamescreen/' + this.data]);
        this.router.navigate(['gamescreen', dataString]);
        
      }
    }

  }

}
