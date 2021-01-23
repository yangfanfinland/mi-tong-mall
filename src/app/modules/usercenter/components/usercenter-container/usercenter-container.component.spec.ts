/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCenterContainerComponent } from './usercenter-container.component';

describe('UserCenterContainerComponent', () => {
  let component: UserCenterContainerComponent;
  let fixture: ComponentFixture<UserCenterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserCenterContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCenterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
