import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIncluirEditarComponent } from './modal-incluir-editar.component';

describe('ModalIncluirEditarComponent', () => {
  let component: ModalIncluirEditarComponent;
  let fixture: ComponentFixture<ModalIncluirEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalIncluirEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalIncluirEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
