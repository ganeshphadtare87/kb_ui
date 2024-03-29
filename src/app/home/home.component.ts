import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.get().subscribe(data => {
      // debugger;
      // alert(data);
    },
      error => {
        // debugger;
        console.log(error);
      }
    );
  }

}
