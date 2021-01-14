import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MDBBootstrapModule} from 'angular-bootstrap-md'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebAppComponent } from './components/web-app/web-app.component';
import { ArtistItemComponent } from './components/artist-item/artist-item.component';
import { SearchComponent } from './components/search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './filter.pipe';
import { EventModalComponent } from './event-modal/event-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    WebAppComponent,
    ArtistItemComponent,
    SearchComponent,
    FilterPipe,
    EventModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    WebAppComponent,
    ArtistItemComponent,
    SearchComponent,
    EventModalComponent],
  
    
  schemas:[NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
