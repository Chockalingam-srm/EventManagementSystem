import { Routes } from '@angular/router';
import { Login } from './Accounts/login/login';
import { AddEvents } from './add-events/add-events';
import { ViewEvent } from './view-event/view-event';

export const routes: Routes = [
    {path : 'login', component : Login},
    {path : 'addevents', component : AddEvents},
    {path : 'viewevents' , component : ViewEvent}
];
