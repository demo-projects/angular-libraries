import {ModuleWithProviders, NgModule} from '@angular/core';
import { StringUtilsComponent } from './string-utils.component';
import {StringUtilsService} from "./string-utils.service";


@NgModule({
  declarations: [StringUtilsComponent],
  exports: [StringUtilsComponent]
})
export class StringUtilsModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StringUtilsModule,
      providers: [StringUtilsService]
    }
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: StringUtilsModule,
      providers: []
    }
  }

}
