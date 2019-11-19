import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { employeemodel } from './memberlist.model.comopnent';
import {MatDialog} from '@angular/material/dialog';
import { AddmemberdialogComponent } from '../addmemberdialog/addmemberdialog.component';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css'],
  encapsulation:ViewEncapsulation.Emulated
  //encapsulation:ViewEncapsulation.Native
  //encapsulation:ViewEncapsulation.None
})
export class MemberlistComponent implements OnInit {

  employees:employeemodel[];
  constructor(public dialog:MatDialog) {
    this.employees=[new employeemodel("Pradip Rai","E31084","Developer",true),
    new employeemodel("Bharani","E17582","Manager",false),
    new employeemodel("Ankit","E15557","TeamLeader",false),
    new employeemodel("Amit","E17582","TeamLeader",false)]
   }
   openDialog(){
    const dialogRef=this.dialog.open(AddmemberdialogComponent,{
      width:'250px'
    }) 
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let dialogname = new employeemodel(result.name, result.eid,
          result.role, false)
        this.employees.unshift(dialogname);
        console.log(result);
      }
    })
  }
  ngOnInit() {
  }
  ListMember = 'Member List:';
}
