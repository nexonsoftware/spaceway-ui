import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { FlightListComponent } from './layout/flight-list/flight-list.component';
import { TravellerDetailsComponent } from './traveller-details/traveller-details.component';
import { VisaDeatailsComponent } from './layout/visa-deatails/visa-deatails.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'slider', component: SliderComponent},
  { path:'slider', component: ListingComponent},
  { path:'tour', component: TourComponent},
  { path:'tour-listing', component: TourListingComponent},
  { path:'tour-details', component: TourDetailsComponent},
  { path:'account', component: AccountNavComponent},
  { path:'password', component: AccountPasswordComponent},
  { path:'profile', component: AccountProfileComponent},
  { path:'wishlist', component: AccountWishlistComponent},
  { path:'history', component: AccountHistoryComponent},
  { path:'notification', component: AccountNotificationComponent},
  { path:'offer', component: AccountOfferComponent},
  { path:'flight', component: FlightComponent},
  { path:'flight-listing', component: FlightListingComponent},
  { path:'about', component: AboutComponent},
  { path:'contact', component: ContactComponent},
  { path:'term-condition', component: TcComponent},
  { path:'privacy-policy', component: PrivacyComponent},
  { path:'flight-list', component: FlightListComponent},
  { path:'traveller-details', component: TravellerDetailsComponent},
  { path:'visa-details', component: VisaDeatailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
