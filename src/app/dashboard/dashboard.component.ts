import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("ngoninit called")
    this.route.params.subscribe(params => {
      console.log("kjdfbjkbdkk")
    })
  }

  openCard(type: string) {
    if (type === 'owner') {
      this.router.navigate(['/owners'])

    }
  }

}
