import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-adduser',
  templateUrl: './dialog-adduser.component.html',
  styleUrls: ['./dialog-adduser.component.scss']
})
export class DialogAdduserComponent implements OnInit {
  user = new User();
  birthday: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAdduserComponent>, private firestore: AngularFirestore) {

  }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  addUser() {
    console.log(this.user);
    this.user.birthday = this.birthday.getTime();
    this.loading = true;

    this.firestore
      .collection('users')
      .add(this.user.toJSON())
      .then((result: any) => {
        console.log('Finished adding user ', result);
        this.loading = false;
        this.dialogRef.close();
      });
  }

}
