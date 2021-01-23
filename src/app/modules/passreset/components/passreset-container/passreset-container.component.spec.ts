/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PassResetContainerComponent } from './passreset-container.component';

describe('PassResetContainerComponent', () => {
  let component: PassResetContainerComponent;
  let fixture: ComponentFixture<PassResetContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PassResetContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassResetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
