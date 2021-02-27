/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderListContainerComponent } from './orderlist-container.component';

describe('OrderListContainerComponent', () => {
  let component: OrderListContainerComponent;
  let fixture: ComponentFixture<OrderListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderListContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
