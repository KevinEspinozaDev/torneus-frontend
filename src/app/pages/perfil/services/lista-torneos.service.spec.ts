import { TestBed } from '@angular/core/testing';

import { ListaTorneosService } from './lista-torneos.service';

describe('ListaTorneosService', () => {
  let service: ListaTorneosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaTorneosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
