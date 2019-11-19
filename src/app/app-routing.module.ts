import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ProjectformComponent} from './projectform/projectform.component'
import{MemberlistComponent} from './memberlist/memberlist.component'

const routes: Routes = [
  {path:'',component:MemberlistComponent},
  {path:'projectform',component:ProjectformComponent},
  {path:'**',component:MemberlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
