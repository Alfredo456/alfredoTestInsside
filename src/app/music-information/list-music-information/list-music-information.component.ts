import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MusicInformationService } from '../music-information.service';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationsService } from '../../global/services/notifications.service';

@Component({
  selector: 'app-list-music-information',
  templateUrl: './list-music-information.component.html',
  styleUrls: ['./list-music-information.component.scss'],
})
export class ListMusicInformationComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  displayedColumns: string[];
  resultsLength: number;
  dataSource: MatTableDataSource<any>;
  filter: string | undefined;

  constructor(
    private _musicInformationService: MusicInformationService,
    private _notificationsService: NotificationsService
  ) {
    this.displayedColumns = ['name', 'artists'];
    this.resultsLength = 0;
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource.data = [];
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initList();
  }
  initList(payload?: any) {
    this._musicInformationService.search(payload ? payload : null).subscribe(
      (response) => {
        this.dataSource = new MatTableDataSource<any>(response.tracks.items);
        this.resultsLength = response.tracks.total;
        if (!payload) {
          this.dataSource.paginator = this.paginator ? this.paginator : null;
        }
      },
      (error) => {
        if (error.status === 400) {
          this._notificationsService.showNotification('danger', 'No hay resultados actualmente');
        } else {
          this._notificationsService.showNotification('danger', 'Ha ocurrido un error');
        }
      }
    );
  }
  handlePageEvent(event: any) {
    let payload = {
      filter: this.filter,
      index: event.pageIndex * event.pageSize,
    };
    this.initList(payload);
  }
  textFilter(event: any) {
    let payload = {
      filter: this.filter,
      index: 0,
    };
    this.initList(payload);
  }
}
