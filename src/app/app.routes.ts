import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    {
        path: "users",
        component: UsersComponent
    },
    {
        path: "",
        component: AuthComponent
    }
];
