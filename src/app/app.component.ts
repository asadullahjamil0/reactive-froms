import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-froms';
  arrayHobbies: string[] = ['Reading', 'Hiking', 'Travelling'];

  signUp = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    age: new FormControl('', [Validators.required, Validators.min(10), Validators.max(60)]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
    gender: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    accept: new FormControl('', [Validators.requiredTrue]),
    hobbies: new FormArray([], [Validators.required])
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
  onChange(e: any) {
    const checkedValue = e.target.value;
    const checked = e.target.checked;

    const checkedArray = this.signUp.get('hobbies') as FormArray;
    if (checked) {
      checkedArray.push(new FormControl(checkedValue));
    }
    else {
      let i: number = 0;
      checkedArray.controls.forEach((item) => {
        if (item.value == checkedValue) {
          checkedArray.removeAt(i);

        }
        i++;
      })
    }
  }
}
