import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemComponent} from './system.component';
import {LoginComponent} from './login/login.component';
import {SystemRoutingModule} from './system-routing.module';
import { CompanyInformationComponent } from './company-information/company-information.component';
import { HeaderComponent } from './shared/header/header.component';
import { NewsComponent } from './news/news.component';
import { PersonalAccountComponent } from './personal-account/personal-account.component';
@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule
  ],
  declarations:[
    SystemComponent,
    LoginComponent,
    CompanyInformationComponent,
    HeaderComponent,
    NewsComponent,
    PersonalAccountComponent
  ]

})

export class SystemModule { }
