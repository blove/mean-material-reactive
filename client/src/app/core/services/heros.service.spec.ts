import { TestBed, inject } from '@angular/core/testing';

import { HerosService } from './heros.service';

describe('HerosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HerosService]
    });
  });

  it('should be created', inject([HerosService], (service: HerosService) => {
    expect(service).toBeTruthy();
  }));
});
