import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCombinationComponent } from './all-combination/all-combination.component';
import { CombinationComponent } from './combination/combination.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'combination', component: CombinationComponent },
{ path: 'allCombination', component: AllCombinationComponent },
{ path: '**', component: HomeComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
