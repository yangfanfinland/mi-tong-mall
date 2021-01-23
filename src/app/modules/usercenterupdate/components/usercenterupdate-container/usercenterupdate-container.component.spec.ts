/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCenterUpdateContainerComponent } from './usercenterupdate-container.component';

describe('UserCenterUpdateContainerComponent', () => {
  let component: UserCenterUpdateContainerComponent;
  let fixture: ComponentFixture<UserCenterUpdateContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserCenterUpdateContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCenterUpdateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
