import { TestBed } from '@angular/core/testing';

import { LvAssistantService } from './lv-assistant.service';

describe('LvAssistantService', () => {
  let service: LvAssistantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LvAssistantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
