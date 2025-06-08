import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Notfound } from './pages/notfound/notfound';
import { Explore } from './pages/explore/explore';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { Oneway } from './learn/oneway/oneway';

export const routes: Routes = [
    {
        path: "",
        component: Landing
    },
    {
        path: "about",
        component: About
    },
    {
        path: "contact",
        component: Contact
    },
    {
        path: "explore",
        component: Explore
    },
    {
        path: "login",
        component: Login
    },
    {
        path: "register",
        component: Register
    },
    {
        path: "dashboard",
        component: Dashboard
    },
    {
        path: "contact",
        component: Contact
    },
    {
        path: "learn",
        component: Oneway
    },
    {
        path: "**",
        component: Notfound
    }
];
