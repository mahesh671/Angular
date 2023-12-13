import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';

const adminRoutes: Routes = [
  { path: '', component: AdminComponent },
  // Other admin routes
];
@NgModule({
  declarations: [AdminComponent,],
  imports: [
    CommonModule,RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]

})
export class AdminModule { }
