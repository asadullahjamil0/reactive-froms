import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-froms';

  signUp = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    age: new FormControl('', [Validators.required, Validators.min(10), Validators.max(60)]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
    gender: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required])
  });

  public myName: any = "";
  public myAge: any = "";
  public myEmail: any = "";
  handleSubmit() {
    console.log(this.signUp.value);
    console.log(this.signUp.value.name);
    console.log(this.signUp.value.age);
    console.log(this.signUp.value.email);
    this.myName = this.signUp.value.name;
    this.myAge = this.signUp.value.age;
    this.myEmail = this.signUp.value.email;
  }

  get f() {
    return this.signUp.controls;
  }
}
