import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { WidgetsListComponent } from './components/pages/widgets-list/widgets-list.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'widgets', component: WidgetsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }