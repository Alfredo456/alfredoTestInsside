import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMusicInformationComponent } from './list-music-information.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MockComponent, MockDirective} from "ng-mocks";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {FormsModule} from "@angular/forms";
import {NotificationsService} from "../../global/services/notifications.service";
import {MatPaginatorModule} from "@angular/material/paginator";

describe('ListMusicInformationComponent', () => {
  let component: ListMusicInformationComponent;
  let fixture: ComponentFixture<ListMusicInformationComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMusicInformationComponent, MockComponent(MatFormField),  MockDirective(MatLabel)],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, MatPaginatorModule, MatTableModule],
      providers: [
        {
          provider: NotificationsService,
          useValue: () => {
            showNotification: () => {};
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMusicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('initAtributes', () => {
    beforeEach(()=>{
      component.initAtributes();
    });
    it('displayedColumns', () => {
      expect(component.displayedColumns).toBeTruthy();
    });
    it('resultsLength', () => {
      expect(component.resultsLength).toEqual(0);
    });
    it('dataSource', () => {
      expect(component.dataSource).toBeTruthy();
    });
    it('dataSource', () => {
      expect(component.dataSource.data).toBeTruthy();
    });
  });
});
