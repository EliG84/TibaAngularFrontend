import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Todos.AddComponent } from './todos.add.component';

describe('Todos.AddComponent', () => {
  let component: Todos.AddComponent;
  let fixture: ComponentFixture<Todos.AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Todos.AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Todos.AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
