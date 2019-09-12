import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorksComponent } from './components/works/works.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'works', component: WorksComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
