import { TestBed } from '@angular/core/testing';

import { MusicInformationService } from './music-information.service';

describe('MusicInformationService', () => {
  let service: MusicInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
