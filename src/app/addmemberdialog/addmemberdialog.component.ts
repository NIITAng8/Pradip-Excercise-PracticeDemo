import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MemberlistComponent } from '../memberlist/memberlist.component';

@Component({
  selector: 'app-addmemberdialog',
  templateUrl: './addmemberdialog.component.html',
  styleUrls: ['./addmemberdialog.component.css']
})
export class AddmemberdialogComponent implements OnInit {
  roles=["Developer","Manager"];
  selectedoption:string="Developer"
  constructor(public dialogRef: MatDialogRef<MemberlistComponent>) { }
  CloseDialog() {
    this.dialogRef.close();
  }  
  addmember(name,eid){
    this.dialogRef.close({name:name,eid:eid,role:this.selectedoption});
  }
  ngOnInit() {
  }

}
