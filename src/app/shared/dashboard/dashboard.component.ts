import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService:UserService) { }

  buzones:number;
  users:number;
  somaUsers:number;
  
  ngOnInit(): void {
    this.userService.getBuzonesMysql().subscribe((resp:any)=>{
      this.buzones = resp.length

      console.log('new users 2019 ', resp.length);


      this.userService.get_Users().subscribe((resp:any)=>{
        
        this.users = resp.users.length + this.buzones
     
        this.users;
        
  
  
      })



      
    })

    

    
  }

}