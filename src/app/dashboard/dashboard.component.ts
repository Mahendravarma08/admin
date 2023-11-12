import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("ngoninit called")
    this.route.params.subscribe(params => {
      console.log("kjdfbjkbdkk")
    })
  }

  openCard(type: string) {
    console.log(type, "type")
  }

}
