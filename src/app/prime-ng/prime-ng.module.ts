import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  exports: [ButtonModule, RippleModule, MenuModule, MenubarModule],
})
export class PrimeNgModule {}
