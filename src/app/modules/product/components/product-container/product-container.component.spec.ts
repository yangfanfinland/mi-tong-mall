/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductContainerComponent } from './product-container.component';

describe('HomeContainerComponent', () => {
  let component: ProductContainerComponent;
  let fixture: ComponentFixture<ProductContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
