import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringUtilsComponent } from './string-utils.component';

describe('StringUtilsComponent', () => {
  let component: StringUtilsComponent;
  let fixture: ComponentFixture<StringUtilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringUtilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
