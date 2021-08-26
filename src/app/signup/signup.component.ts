import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  addForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataservice: DataService
  ) {}
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  phoneregex = /^([+]\d{2})?\d{10}$/;

  ngOnInit(): void {
    this.addForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailRegex),
      ]),
      mobilenumber: new FormControl('', [
        Validators.required,
        Validators.pattern(this.phoneregex),
      ]),
    });
  }
  get f() {
    return this.addForm.controls;
  }

  onSubmit() {
    this.dataservice.updateUserData(this.addForm.value);
    alert('Registered Sucessfully');
    this.router.navigateByUrl('modify');
  }
}
