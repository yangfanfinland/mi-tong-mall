/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PassUpdateContainerComponent } from './passupdate-container.component';

describe('PassUpdateContainerComponent', () => {
  let component: PassUpdateContainerComponent;
  let fixture: ComponentFixture<PassUpdateContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PassUpdateContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassUpdateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
