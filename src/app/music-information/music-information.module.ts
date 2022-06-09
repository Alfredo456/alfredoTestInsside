import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicInformationComponent } from './music-information.component';
import { ListMusicInformationComponent } from './list-music-information/list-music-information.component';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from '../auth/auth.routing';
import { MusicInformationRoutes } from './music-information.routing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {SidebarModule} from "../sidebar/sidebar.module";

@NgModule({
  declarations: [MusicInformationComponent, ListMusicInformationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MusicInformationRoutes),
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    SidebarModule
  ],
})
export class MusicInformationModule {}
