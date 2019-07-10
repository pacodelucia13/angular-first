import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";
import { CommonModule } from "@angular/common";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";

@NgModule({
   declarations: [
       DropdownDirective,
       LoadingSpinnerComponent
   ], 
   exports: [
       CommonModule,
       DropdownDirective,
       LoadingSpinnerComponent
   ] 
})
export class SharedModule {

}