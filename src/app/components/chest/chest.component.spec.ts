import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestComponent } from './chest.component';

describe('ChestComponent', () => {
  let component: ChestComponent;
  let fixture: ComponentFixture<ChestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
