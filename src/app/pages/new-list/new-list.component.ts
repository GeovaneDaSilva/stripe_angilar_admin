import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  users:any []=[]
  
  filterPost = '';


  constructor( private userService: UserService) { 

    this.userService.get_Users().subscribe((resp:any)=>{
        

      console.log('soy una resp ########', resp);
      this.users = resp.users
  
      console.log('new users 2020 ', this.users);
      
      
    })
  }

  ngOnInit(): void {
  }

}
