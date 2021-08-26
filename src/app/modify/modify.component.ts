import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css'],
})
export class ModifyComponent implements OnInit {
  modify = false;
  addForm: any;
  constructor(private dataservice: DataService, private router: Router) {}
  userdata = undefined;
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  phoneregex = /^([+]\d{2})?\d{10}$/;
  ngOnInit(): void {
    this.dataservice.userDataSource.subscribe((data) => {
      this.userdata = { ...data };
      console.log(this.userdata);
    });
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
    this.addForm.controls.firstname.setValue(this.userdata.firstname);
    this.addForm.controls.lastname.setValue(this.userdata.lastname);
    this.addForm.controls.address.setValue(this.userdata.address);
    this.addForm.controls.email.setValue(this.userdata.email);
    this.addForm.controls.mobilenumber.setValue(this.userdata.mobilenumber);
  }
  get f() {
    return this.addForm.controls;
  }
  updatemodify() {
    this.modify = true;
  }
  onSubmit() {
    this.dataservice.updateUserData(this.addForm.value);
    this.dataservice.userDataSource.subscribe((data) => {
      this.userdata = { ...data };
      console.log(this.userdata);
    });
    alert('Updated User Sucessfully');
    this.modify = false;
    // this.router.navigateByUrl('modify');
  }
}
