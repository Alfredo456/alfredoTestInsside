import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicInformationComponent } from './music-information.component';

describe('MusicInformationComponent', () => {
  let component: MusicInformationComponent;
  let fixture: ComponentFixture<MusicInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicInformationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
