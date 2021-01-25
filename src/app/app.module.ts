import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { VistaproductoComponent } from './componentes/vistaproducto/vistaproducto.component';
import { LoginComponent } from './componentes/login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseServiceService } from './services/firebase-service.service';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    VistaproductoComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }