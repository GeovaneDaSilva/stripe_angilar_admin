import { Component, OnInit } from '@angular/core';
import { USER_ID } from 'src/app/config/config';
import { packageModel } from 'src/app/models/package';
import { PackagesService } from 'src/app/services/packages.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-packages',
  templateUrl: './list-packages.component.html',
  styleUrls: ['./list-packages.component.css']
})
export class ListPackagesComponent implements OnInit {

  user_id_storage = USER_ID
  showPackages:boolean;
  awaitPaquete:any [] =[];
  allInfo = []
  paquete = new packageModel();
  paquetes = [];
  users = [];

  constructor( private packagesService: PackagesService, private userService:UserService) { }

  ngOnInit(): void {

    this.getPackages();
    this.getUsers();
    
  }


  getPackages(){
    this.packagesService.getAlertPackages().subscribe((resp:any) =>{
      console.log('todos os resp', resp.packages);
      this.paquetes = resp.packages
      console.log('todos os paquetes 2020', this.paquetes);

      
    })

  }


  getUsers(){
    this.userService.get_Users().subscribe((resp:any) =>{
      this.users = resp.users
      console.log('todos os usuarios###', this.users);

      
    });

  }

}