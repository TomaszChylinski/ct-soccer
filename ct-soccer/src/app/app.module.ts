import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StoreComponent } from './store/store.component';
import { NewsfeedComponent } from './homepage/newsfeed/newsfeed.component';
import { FeedComponent } from './play/feed/feed.component';
import { EditPostsComponent } from './play/feed/edit-posts/edit-posts.component';
import { Routes, RouterModule } from '@angular/router';
import { PlayComponent } from './play/play/play.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { PostsComponent } from './play/posts/posts.component';
import {MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { PostsListComponent } from './play/posts-list/posts-list.component';


const appRoutes: Routes = [
{path: '', component: HomepageComponent},
{path: 'home', component: HomepageComponent},
{path: 'play', component: PlayComponent},
{path: 'news', component: NewsfeedComponent},
{path: 'shop', component: StoreComponent},
{path: 'schedule', component: ScheduleComponent},
{path: 'news', component: NewsfeedComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    NavigationComponent,
    FooterComponent,
    HomepageComponent,
    ScheduleComponent,
    StoreComponent,
    NewsfeedComponent,
    FeedComponent,
    EditPostsComponent,
    PlayComponent,
    DropDownDirective,
    PostsComponent,
    PostsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatInputModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavigationComponent]
})
export class AppModule { }
