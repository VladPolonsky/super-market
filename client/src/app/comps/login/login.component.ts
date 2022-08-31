import { AdmincheckService } from './../../services/admincheck.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { assertPlatform, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router,private admincheckService:AdmincheckService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }
  login() {
    this.http.post<any>("http://localhost:1002/users/login", this.loginForm.value, { observe: 'response' })
      .subscribe(res => {
        // const user = res.body.user
        if (res.status == 200 && res.body.userrole === 1) {
          alert("Admin User , Login Success")
          this.loginForm.reset();
          this.admincheckService.setIsAdmin(true);
          this.router.navigate(['products'])
        }
        if (res.status == 200  && res.body.userrole !== 1){
          alert("Normal User , Login success")
          this.loginForm.reset();
          this.router.navigate(['products'])
          this.admincheckService.setIsAdmin(false);

        }
      },err=>{
        alert("Something went wrong ! ")
       
      })




  }
}
