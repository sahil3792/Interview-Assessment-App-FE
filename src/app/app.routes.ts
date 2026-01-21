import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Candidates } from './pages/candidates/candidates';
import { Layout } from './pages/layout/layout';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path:'',
        component: Layout,
        children: [
            {
                path: 'candidates',
                component: Candidates
            },
            {
                path: 'dashboard',
                component: Candidates
            }
        ]
    }
];
