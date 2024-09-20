import { TestBed } from '@angular/core/testing';

import { ClientesoapService } from './clientesoap.service';

describe('ClientesoapService', () => {
  let service: ClientesoapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesoapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
