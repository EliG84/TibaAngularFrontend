import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Todos.CompleteComponent } from './todos.complete.component';

describe('Todos.CompleteComponent', () => {
  let component: Todos.CompleteComponent;
  let fixture: ComponentFixture<Todos.CompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Todos.CompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Todos.CompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
