import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: WelcomeComponent
    },
    {
        path: 'reviews',
        component: ReviewListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
