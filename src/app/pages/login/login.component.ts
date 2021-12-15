import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ValidationErrors, FormGroup, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      let observable = this.authService.login();
      observable.subscribe({
        next: () => {
          this.router.navigateByUrl('');
        }
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


  passwordLengthAsyncValidator = (control: FormControl) => 
    new Observable((observer: Observer<ValidationErrors | null>) => {
      if (!control.value) {
        observer.next({ error: true, required: true });
      } 
      else if (control.value.length < 6) {
        observer.next({ passwordLenth: true, error: true });
      }
      else {
        observer.next(null);
      }
      observer.complete();
    });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required], [this.passwordLengthAsyncValidator]],
    });
  }

}
