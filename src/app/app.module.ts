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
import { ArrowChevronRightIconComponent } from './shared/icons/arrow-chevron-right-icon/arrow-chevron-right-icon.component';
import { ArrowChevronLeftIconComponent } from './shared/icons/arrow-chevron-left-icon/arrow-chevron-left-icon.component';
import { ArrowChevronUpIconComponent } from './shared/icons/arrow-chevron-up-icon/arrow-chevron-up-icon.component';
import { ArrowChevronDownIconComponent } from './shared/icons/arrow-chevron-down-icon/arrow-chevron-down-icon.component';
import { BookDetailFooterComponent } from './book-detail/book-detail-footer/book-detail-footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { CartButtonComponent } from './layout/header/cart-button/cart-button.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookDetailComponent,
    BookDetailSliderComponent,
    BookDetailDescriptionComponent,
    BookDetailInformationComponent,
    CloseIconComponent,
    BookDetailRowComponent,
    ArrowChevronRightIconComponent,
    ArrowChevronLeftIconComponent,
    ArrowChevronUpIconComponent,
    ArrowChevronDownIconComponent,
    BookDetailFooterComponent,
    HeaderComponent,
    CartButtonComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
