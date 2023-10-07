import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './components/topheading/topheading.component';
import { TechnewsComponent } from './components/technews/technews.component';
import { BusinessnewsComponent } from './components/businessnews/businessnews.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent},
  {path:'technology',component:TechnewsComponent},
  {path:'business',component:BusinessnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
