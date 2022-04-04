import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMusicInformationComponent } from './list-music-information.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListMusicInformationComponent', () => {
  let component: ListMusicInformationComponent;
  let fixture: ComponentFixture<ListMusicInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMusicInformationComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
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
});
