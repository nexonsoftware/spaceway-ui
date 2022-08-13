import { TokenInterceptorService } from './services/token-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';

import { HeaderComponent } from './layout/header/header.component';
import { SearchComponent } from './layout/search/search.component';
import { TravellerComponent } from './layout/traveller/traveller.component';
import { FlightSearchComponent } from './layout/flight-search/flight-search.component';
import { HotelSearchComponent } from './layout/hotel-search/hotel-search.component';
import { InfoComponent } from './layout/info/info.component';
import { FooterComponent } from './layout/footer/footer.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { ListingComponent } from './listing/listing.component';

import { TourComponent } from './tour/tour.component';
import { TourListingComponent } from './tour-listing/tour-listing.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';

import { AccountNavComponent } from './account-nav/account-nav.component';
import { AccountPasswordComponent } from './account-password/account-password.component';
import { AccountProfileComponent } from './account-profile/account-profile.component';
import { AccountWishlistComponent } from './account-wishlist/account-wishlist.component';
import { AccountHistoryComponent } from './account-history/account-history.component';
import { AccountNotificationComponent } from './account-notification/account-notification.component';
import { AccountOfferComponent } from './account-offer/account-offer.component';

import { FlightComponent } from './flight/flight.component';
import { FlightListingComponent } from './flight-listing/flight-listing.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TcComponent } from './tc/tc.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DatePipe } from '@angular/common';
import { FlightListComponent } from './layout/flight-list/flight-list.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from './shared/auth.service';
import { TravellerDetailsComponent } from './traveller-details/traveller-details.component';
import { VisaComponent } from './layout/visa/visa.component';
import { MatSelectFilterModule } from 'mat-select-filter';
import { VisaDeatailsComponent } from './layout/visa-deatails/visa-deatails.component';
import { InsuranceComponent } from './layout/insurance/insurance.component';
import { VisaTravellerComponent } from './layout/visa-traveller/visa-traveller.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SearchComponent,
    TravellerComponent,
    FooterComponent,
    HomeComponent,
    InfoComponent,
    SliderComponent,
    ListingComponent,
    TourComponent,
    TourListingComponent,
    TourDetailsComponent,
    AccountNavComponent,
    AccountPasswordComponent,
    AccountProfileComponent,
    AccountWishlistComponent,
    AccountHistoryComponent,
    AccountNotificationComponent,
    AccountOfferComponent,
    FlightListingComponent,
    FlightSearchComponent,
    HotelSearchComponent,
    FlightComponent,
    AboutComponent,
    ContactComponent,
    TcComponent,
    PrivacyComponent,
    FlightListComponent,
    TravellerDetailsComponent,
    VisaComponent,
    VisaDeatailsComponent,
    InsuranceComponent,
    VisaTravellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    MatCardModule,
    MatSelectFilterModule, 
    HttpClientModule,
    MatAutocompleteModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi: true
    },
    AuthService
    
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    TravellerComponent,
    LoginComponent,
    VisaTravellerComponent,
  ]
})
export class AppModule { }
