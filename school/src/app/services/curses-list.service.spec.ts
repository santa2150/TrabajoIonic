import { TestBed } from '@angular/core/testing';

import { CursesListService } from './curses-list.service';

describe('CursesListService', () => {
  let service: CursesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
