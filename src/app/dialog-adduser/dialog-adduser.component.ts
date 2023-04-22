import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-adduser',
  templateUrl: './dialog-adduser.component.html',
  styleUrls: ['./dialog-adduser.component.scss']
})
export class DialogAdduserComponent implements OnInit {
  user = new User();
  birthday: Date;

  constructor(public dialogRef: MatDialogRef<DialogAdduserComponent>) {

  }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  addUser() {
    console.log(this.user);
    this.user.birthday = this.birthday.getTime();
  }

}
