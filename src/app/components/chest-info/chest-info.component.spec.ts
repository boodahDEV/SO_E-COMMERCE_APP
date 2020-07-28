import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestInfoComponent } from './chest-info.component';

describe('ChestInfoComponent', () => {
  let component: ChestInfoComponent;
  let fixture: ComponentFixture<ChestInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChestInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChestInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
