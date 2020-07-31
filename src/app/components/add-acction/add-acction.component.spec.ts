import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcctionComponent } from './add-acction.component';

describe('AddAcctionComponent', () => {
  let component: AddAcctionComponent;
  let fixture: ComponentFixture<AddAcctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAcctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAcctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
