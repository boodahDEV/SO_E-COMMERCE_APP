import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoiaPorProductoComponent } from './categoia-por-producto.component';

describe('CategoiaPorProductoComponent', () => {
  let component: CategoiaPorProductoComponent;
  let fixture: ComponentFixture<CategoiaPorProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoiaPorProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoiaPorProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
