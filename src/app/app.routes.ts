import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ExpertiseComponent } from './expertise/expertise.component';

export const routes: Routes = [
    { path:'home', component: HomeComponent },
    { path:'about', component: AboutComponent },
    { path:'services', component: ServicesComponent },
    { path:'expertises', component: ExpertiseComponent },
    { path:'contact', component: ContactComponent },
];
