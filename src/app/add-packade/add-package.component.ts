import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { TOKEN, URL_SERVICES } from '../config/config';
import { packageModel } from '../models/package';
import { UserModel } from '../models/user';
import { PackagesService } from '../services/packages.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
})
export class AddPackageComponent implements OnInit {


  //VARS
  url = URL_SERVICES
  token = TOKEN
  paquete = new packageModel();
  users:any [] = [];
  id:string
  _id: string
  package = new packageModel();

  message:boolean = false
  
  user = new UserModel();

  paymentQtd: number = 500


  constructor( private userService: UserService, private http:HttpClient,
               private router: ActivatedRoute, public route: Router,
               private packageService: PackagesService ) { }

  ngOnInit(){


    this.getUsers(); // All Users

    this.id = this.router.snapshot.paramMap.get("id")

    this.userService.getOneUser(this.id).subscribe((resp:any)=>{
      this.user.nombre = resp.user.nombre
      this.user.phone = resp.user.phone
      this.user.n_buzon = resp.user.n_buzon
      this.user.email = resp.user.email
      
      console.log(this.user.n_buzon )
      console.log(this.user.phone, this.user.email );
      

    })
    return this.id
    
  }


// GET USERS
  getUsers(){
    
    this.userService.get_Users().subscribe((resp:any)=>{
      this.users = resp.users

      console.log('usuarios', this.users);
      
    })
  }



//POST AND SAVE PACKAGE

 savePackage( f ){
  
  const headers = new HttpHeaders({
    "token": this.token
  });

   console.log(this.package);
   
    this.user.phone
    this.http.post(`${this.url}/user/package/`+this.id, this.package, {headers}).subscribe();
    
    this.message = true;
    this.route.navigate(['/packages'])

   
}



}
