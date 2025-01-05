import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-froms';

  signUp = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl('')
  });

  public myName:any = "";
  handleSubmit() {
    console.log(this.signUp.value.name);
    console.log(this.signUp.value.age);
    console.log(this.signUp.value.email);
    this.myName = this.signUp.value.name;
  }
}
