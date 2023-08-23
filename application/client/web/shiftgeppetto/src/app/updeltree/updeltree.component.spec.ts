import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdeltreeComponent } from './updeltree.component';

describe('UpdeltreeComponent', () => {
  let component: UpdeltreeComponent;
  let fixture: ComponentFixture<UpdeltreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdeltreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdeltreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});