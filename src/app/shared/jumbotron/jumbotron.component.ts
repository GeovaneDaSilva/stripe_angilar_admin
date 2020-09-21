import { Component, OnInit } from '@angular/core';
import { USER_NOMBRE } from 'src/app/config/config';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  nombre = USER_NOMBRE
  constructor() { }

  ngOnInit(): void {
  }

}
