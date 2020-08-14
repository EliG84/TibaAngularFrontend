import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Todos.HeaderComponent } from './todos.header.component';

describe('Todos.HeaderComponent', () => {
  let component: Todos.HeaderComponent;
  let fixture: ComponentFixture<Todos.HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Todos.HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Todos.HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
