import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My First';
  maxOn: boolean = true;
  names: string[] = [ "Ann", "Bob", "Chris", "David", "Ellen" ]; 
  customers: any[] = [
    { id: 1, name: "MAX", sales: 10000, sc: "OH" },
    { id: 2, name: "PG", sales: 100000, sc: "LA" },
    { id: 3, name: "Amazon", sales: 250000, sc: "IL" }
  ];

  aString1: string = "";
  aString2: string = "";

  copy():void {
    this.aString2 = this.aString1;
  }
  

  click(): void {
    if(this.maxOn) {
      this.title = "Jeffrey's";
      this.maxOn = !this.maxOn;
    } else {
      this.maxOn = !this.maxOn;
      this.title = "This is my";
    }
  }

}

