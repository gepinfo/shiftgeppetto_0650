import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetreeComponent } from './createtree.component';

describe('CreatetreeComponent', () => {
  let component: CreatetreeComponent;
  let fixture: ComponentFixture<CreatetreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});