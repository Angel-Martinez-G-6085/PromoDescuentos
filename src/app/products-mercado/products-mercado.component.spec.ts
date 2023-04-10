import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsMercadoComponent } from './products-mercado.component';

describe('ProductsMercadoComponent', () => {
  let component: ProductsMercadoComponent;
  let fixture: ComponentFixture<ProductsMercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsMercadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
