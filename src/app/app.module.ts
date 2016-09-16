import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service'
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component'
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api'
import { InMemoryHeroDataService} from './in-memory-hero-data-service.service';
import { HeroSearchComponent } from './hero-search/hero-search.component'
import "./rxjs-extensions";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryHeroDataService),
    routing
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [ HeroService ],
})
export class AppModule { }