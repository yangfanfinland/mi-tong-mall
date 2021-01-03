/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderConfirmContainerComponent } from './orderconfirm-container.component';

describe('OrderConfirmContainerComponent', () => {
  let component: OrderConfirmContainerComponent;
  let fixture: ComponentFixture<OrderConfirmContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderConfirmContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
