import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicInformationComponent } from './music-information.component';
import { ListMusicInformationComponent } from './list-music-information/list-music-information.component';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from '../auth/auth.routing';
import { MusicInformationRoutes } from './music-information.routing';

@NgModule({
  declarations: [MusicInformationComponent, ListMusicInformationComponent],
  imports: [CommonModule, RouterModule.forChild(MusicInformationRoutes)],
})
export class MusicInformationModule {}
