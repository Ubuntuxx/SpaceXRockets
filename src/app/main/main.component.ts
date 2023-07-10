import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  titulo:string = 'Cohetes de SpaceX';

  data: any[] = []

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get("https://api.spacexdata.com/v4/rockets").subscribe((data: any) => {
      this.data = data;
    })
  }

}
