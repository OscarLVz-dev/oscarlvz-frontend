import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { WidgetsListComponent } from './components/pages/widgets-list/widgets-list.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'widgets', component: WidgetsListComponent },
  { path: 'proyectos', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }