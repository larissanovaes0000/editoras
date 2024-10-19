import { TestBed } from '@angular/core/testing';

import { CrudLivrosService } from './crud-livros.service';

describe('CrudLivrosService', () => {
  let service: CrudLivrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudLivrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
