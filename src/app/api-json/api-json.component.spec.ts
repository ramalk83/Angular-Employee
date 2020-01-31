import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiJsonComponent } from './api-json.component';

describe('ApiJsonComponent', () => {
  let component: ApiJsonComponent;
  let fixture: ComponentFixture<ApiJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
