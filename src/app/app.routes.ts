import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about').then(m => m.About)
    },
    {
        path: 'projects',
        loadComponent: () => import('./projects/projects').then(m => m.Projects)
    },
    {
        path: 'experience',
        loadComponent: () => import('./experience/experience').then(m => m.Experience)
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact').then(m => m.Contact)
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login').then(m => m.Login)
    }
];
