import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService,private router:Router) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passwd: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formRegister.valid) {
      let nom = this.formRegister.value.nom;
      let email = this.formRegister.value.email;
      let passwd = this.formRegister.value.passwd;
  
      this.registerService.register(nom, email, passwd).subscribe(
        (response: any) => {
          
          Swal.fire({
            icon: 'success',
            title: 'Registration Successful',
            text: 'You have successfully registered.',
            confirmButtonText: 'OK'
          });
          this.router.navigateByUrl("/index")
          
        },
        error => {
          
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: 'An error occurred during registration. Please try again later.',
            confirmButtonText: 'OK'
          });
          console.error(error);
        }
      );
    }
  }
  
}
