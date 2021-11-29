import { TestBed } from '@angular/core/testing';

import { TorneosService } from './torneos.service';

describe('TorneoService', () => {
  let service: TorneosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TorneosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
