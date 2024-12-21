import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StatesComponent } from './pages/states/states.component';
import { Component } from '@angular/core';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SingleStateComponent } from './pages/single-state/single-state.component';

export const routes: Routes = [
   { 
    path:'', component:AboutComponent
},
   
{
        path:'states', component:StatesComponent
    },
    {
        path:'contact', component:ContactComponent
    },

    {
        path:'states/:id', component:SingleStateComponent
    },
    
    {
        path:'**',component:NotfoundComponent
    }
];
