import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './modules/share/share.module';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MainFooterComponent } from './core/main-footer/main-footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    NoopAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: []
})
export class AppModule { }
