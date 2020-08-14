import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Todos.EditComponent } from './todos.edit.component';

describe('Todos.EditComponent', () => {
  let component: Todos.EditComponent;
  let fixture: ComponentFixture<Todos.EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Todos.EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Todos.EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
