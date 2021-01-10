import { CategoriesComponent } from './categories/categories.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModules } from '../common/common.module';
import { ListsComponent } from './lists/lists.component';

@NgModule({
    declarations: [CategoriesComponent, ListsComponent],
    imports: [
        CommonModule,
        CommonModules,
        RouterModule
    ]
})
export class MenuModule {
}
