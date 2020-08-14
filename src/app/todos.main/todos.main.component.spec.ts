import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Todos.MainComponent } from './todos.main.component';

describe('Todos.MainComponent', () => {
  let component: Todos.MainComponent;
  let fixture: ComponentFixture<Todos.MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Todos.MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Todos.MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
