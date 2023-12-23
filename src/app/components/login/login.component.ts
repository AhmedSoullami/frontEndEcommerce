import { Component ,OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  passwd: string = '';
  formLogin!:FormGroup;


  constructor(private loginService: LoginService,private fb:FormBuilder,private router:Router) { }
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      passwd: ['', Validators.required]
    });
    
  }

  onLogin() {
    if (this.formLogin.valid) {
      let email = this.formLogin.value.email;
      let passwd = this.formLogin.value.passwd;
      console.log(email, passwd);
  
      this.loginService.login(email, passwd).subscribe(
        (response: any) => {
          console.log("hhhhhh");
          console.log(response);
  
          if (response && typeof response === 'string') {
            
            const parts = response.split(':');
  
            
            const userId = parts[1].trim().replace(/\D/g, ''); 
  
           
            localStorage.setItem('userId', userId);
            console.log("userId:", userId);
  
            this.router.navigateByUrl("/produits");
          }
        },
        error => {
          console.error(error);
        }
      );
    }
  }
  
  
}
