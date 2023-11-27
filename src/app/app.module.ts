import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SemesterComponent } from './semester/semester.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatCardModule } from '@angular/material/card';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RomanNumeralPipe } from './pipes/roman-numeral.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    SemesterComponent,
    FeedbackComponent,
    CardComponent,
    NotificationsComponent,
    RomanNumeralPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule

  ],
  entryComponents: [
    NotificationsComponent, // add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
