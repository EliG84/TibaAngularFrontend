import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Todos.SingleComponent } from './todos.single.component';

describe('Todos.SingleComponent', () => {
  let component: Todos.SingleComponent;
  let fixture: ComponentFixture<Todos.SingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Todos.SingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Todos.SingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
