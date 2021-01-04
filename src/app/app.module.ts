import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from '../app/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { ServerChildComponent } from './servers/server-child/server-child.component';

const appRoutes: Routes = [
  { path: '', component: EntryComponent },
  { path: 'server', component: ServerComponent },
  {
    path: 'servers',
    component: ServersComponent,
    children: [{ path: ':name/:class/:time', component: ServerChildComponent }],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    EntryComponent,
    ServerChildComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
