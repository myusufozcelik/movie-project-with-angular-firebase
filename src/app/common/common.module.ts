import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule],
    declarations: [
        LoginComponent,
        RegisterComponent
    ]
})
export class CommonModules { }
