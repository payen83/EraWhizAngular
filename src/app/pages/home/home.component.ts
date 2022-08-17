import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myScore: number = 50;
  title = "EraWhiz";
  viewScore: boolean = false;
  cars: Array<any> = ["Proton", "Perodua", "Toyota", "Kia", "Honda"];
  
  checkScore(){
    this.viewScore = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
