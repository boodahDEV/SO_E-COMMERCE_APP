import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestConfigComponent } from './chest-config.component';

describe('ChestConfigComponent', () => {
  let component: ChestConfigComponent;
  let fixture: ComponentFixture<ChestConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChestConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChestConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
