import { Routes } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { GetApiComponentComponent } from './components/api/get-api-component/get-api-component.component';
import { PostApiComponentComponent } from './components/api/post-api-component/post-api-component.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerComponent } from './components/api/customer/customer.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo: 'dataBinding',
        pathMatch: 'full'
    } ,
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'dataBinding',
        component: DataBindingComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'getAPI',
        component: GetApiComponentComponent
    },
    {
        path: 'postAPI',
        component: PostApiComponentComponent
    },
    {
        path: 'customer',
        component: CustomerComponent
    }


];