import { Routes } from '@angular/router';
import { MusicInformationComponent } from './music-information.component';
import { ListMusicInformationComponent } from './list-music-information/list-music-information.component';

export const MusicInformationRoutes: Routes = [
  {
    path: '',
    component: MusicInformationComponent,
    children: [
      {
        path: '',
        component: ListMusicInformationComponent,
      },
    ],
  },
];
