import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { CodeComponent } from './pages/code/code.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FamilyComponent } from './pages/family/family.component';
import { FAQComponent } from './pages/faq/faq.component';
import { FilesComponent } from './pages/files/files.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { VacationsComponent } from './pages/vacations/vacations.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  {path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'family', component: FamilyComponent, canActivate: [AuthGuard]},
  {path: 'code', component: CodeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'files', component: FilesComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'settings', component: SettingsComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'trips', component: VacationsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', component: LandingComponent},
  {path: 'faq', component: FAQComponent},
  {path: '**', redirectTo: "/dashboard", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
