import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { ColorComponent } from './color/color.component';
import { NgModule } from '@angular/core';
import { StudentListHttpComponent } from './studentcomp/student-list-http/student-list-http.component';
import { StudentViewHttpComponent } from './studentcomp/student-view-http/student-view-http.component';

export const routes: Routes = [
    { path: 'display', component: DisplayComponent },
    { path: 'color', component: ColorComponent },
    { path: 'studentlist', component: StudentListHttpComponent },
    { path: 'studentview/:id', component: StudentViewHttpComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}