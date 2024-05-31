import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './home.service';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ComponentsModule, HttpClientModule, LoginModule],
  exports: [HomeComponent],
  providers: [HomeService],
})
export class HomeModule {}
