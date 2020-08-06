import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePlainTextComponent } from './template-plain-text.component';

describe('TemplatePlainTextComponent', () => {
  let component: TemplatePlainTextComponent;
  let fixture: ComponentFixture<TemplatePlainTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatePlainTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePlainTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
