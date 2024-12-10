import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaDeTareasPage } from './lista-de-tareas.page';

describe('ListaDeTareasPage', () => {
  let component: ListaDeTareasPage;
  let fixture: ComponentFixture<ListaDeTareasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
