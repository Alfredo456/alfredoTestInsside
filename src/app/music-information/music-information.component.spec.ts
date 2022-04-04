import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicInformationComponent } from './music-information.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MusicInformationComponent', () => {
  let component: MusicInformationComponent;
  let fixture: ComponentFixture<MusicInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicInformationComponent],
      imports: [RouterTestingModule],
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
