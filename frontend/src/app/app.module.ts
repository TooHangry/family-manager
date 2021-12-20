import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FamilyComponent } from './pages/family/family.component';
import { FilesComponent } from './pages/files/files.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { VacationsComponent } from './pages/vacations/vacations.component';
import { SidebarComponent } from './site-elements/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { CodeComponent } from './pages/code/code.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { FAQComponent } from './pages/faq/faq.component';
import { NewTaskModalComponent } from './pages/tasks/new-task-modal/new-task-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DashboardComponent,
    FamilyComponent,
    FilesComponent,
    HomeComponent,
    SettingsComponent,
    TasksComponent,
    VacationsComponent,
    SidebarComponent,
    LoginComponent,
    CodeComponent,
    RegisterComponent,
    LandingComponent,
    FAQComponent,
    NewTaskModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
