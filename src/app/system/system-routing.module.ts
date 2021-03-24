import {LoginComponent} from './login/login.component';
import {SystemComponent} from './system.component';
import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import {CompanyInformationComponent} from './company-information/company-information.component';
import {NewsComponent} from './news/news.component';
import {PersonalAccountComponent} from './personal-account/personal-account.component';

const routes: Routes = [
  { path: '', component: SystemComponent, children: [
      {path: 'company-information', component: CompanyInformationComponent},
      {path: 'login', component: LoginComponent},
      {path: 'news', component: NewsComponent},
      {path: 'personal-account', component: PersonalAccountComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
