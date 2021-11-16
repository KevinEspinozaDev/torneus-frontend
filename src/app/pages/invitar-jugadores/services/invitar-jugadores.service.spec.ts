import { TestBed } from '@angular/core/testing';

import { InvitarJugadoresService } from './invitar-jugadores.service';

describe('InvitarJugadoresService', () => {
  let service: InvitarJugadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvitarJugadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
