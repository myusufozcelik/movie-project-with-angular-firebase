import { CategoriesComponent } from './categories/categories.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModules } from '../common/common.module';

@NgModule({
    declarations: [CategoriesComponent],
    imports: [
        CommonModule,
        CommonModules,
        RouterModule
    ]
})
export class MenuModule {
}
