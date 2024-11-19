import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule] // Exporta para uso em outros módulos
})
export class AppImportsModule {}
