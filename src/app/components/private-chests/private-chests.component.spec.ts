import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateChestsComponent } from './private-chests.component';

describe('PrivateChestsComponent', () => {
  let component: PrivateChestsComponent;
  let fixture: ComponentFixture<PrivateChestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateChestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateChestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
