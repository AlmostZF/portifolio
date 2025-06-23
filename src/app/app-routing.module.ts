import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SnakeComponent } from './pages/snake/snake.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'project', component: ProjectComponent },
  // { path: 'cv', component: CvComponent },
  // { path: 'contract', component: ContractComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona para a página inicial por padrão
  { path: 'snake', component: SnakeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
