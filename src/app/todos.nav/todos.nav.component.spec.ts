import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Todos.NavComponent } from './todos.nav.component';

describe('Todos.NavComponent', () => {
  let component: Todos.NavComponent;
  let fixture: ComponentFixture<Todos.NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Todos.NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Todos.NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
