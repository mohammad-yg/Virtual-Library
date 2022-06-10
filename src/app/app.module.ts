import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookDetailSliderComponent } from './book-detail/book-detail-slider/book-detail-slider.component';
import { BookDetailDescriptionComponent } from './book-detail/book-detail-description/book-detail-description.component';
import { BookDetailInformationComponent } from './book-detail/book-detail-information/book-detail-information.component';
import { CloseIconComponent } from './shared/icons/close-icon/close-icon.component';
import { BookDetailRowComponent } from './book-detail/book-detail-row/book-detail-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookDetailComponent,
    BookDetailSliderComponent,
    BookDetailDescriptionComponent,
    BookDetailInformationComponent,
    CloseIconComponent,
    BookDetailRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
