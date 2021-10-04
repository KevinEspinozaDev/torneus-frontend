import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutMainComponent } from './layout-main/layout-main.component';

const routes: Routes = [
    {
        path: '', component: LayoutMainComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./../pages/pages.module').then(m => m.PagesModule)
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }