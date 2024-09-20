import { TestBed } from '@angular/core/testing';

import { ClienteSolicitudService } from './cliente-solicitud.service';

describe('ClienteSolicitudService', () => {
  let service: ClienteSolicitudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteSolicitudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
