import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySideComponent } from './body-side.component';

describe('BodySideComponent', () => {
  let component: BodySideComponent;
  let fixture: ComponentFixture<BodySideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodySideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
