import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeadersComponent } from './headers/headers.component';
import { HomeComponent } from './pages/home/home.component';// Import the missing component
import { SwitchBackgoundComponent } from './components/switch-backgound/switch-backgound.component';
import { ChangeLanguageComponent } from './components/change-language/change-language.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    HeadersComponent,
    HomeComponent,
    SwitchBackgoundComponent,
    ChangeLanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
