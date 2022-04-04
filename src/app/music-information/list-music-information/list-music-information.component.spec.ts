import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMusicInformationComponent } from './list-music-information.component';

describe('ListMusicInformationComponent', () => {
  let component: ListMusicInformationComponent;
  let fixture: ComponentFixture<ListMusicInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMusicInformationComponent],
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
