import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvAssistantComponent } from './lv-assistant.component';

describe('LvAssistantComponent', () => {
  let component: LvAssistantComponent;
  let fixture: ComponentFixture<LvAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LvAssistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LvAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
