import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Editora } from '../../interfaces/editora';
import { ModalGenericoComponent } from '../../modal-generico/modal-generico.component';
import { CrudEditorasService } from '../../services/editoras.service';

@Component({
  selector: 'app-modal-incluir-editar',
  templateUrl: './modal-incluir-editar.component.html',
  styleUrl: './modal-incluir-editar.component.scss'
})
export class ModalIncluirEditarComponent implements OnInit {

  @Input() editora!: Editora;
  @Input() novoId!: string;

  activeModal = inject(NgbActiveModal);
  edicao = false;

  constructor(
    private _crudEditorasService: CrudEditorasService,
    private _modalService: NgbModal
  ) { }

  ngOnInit() {
    if (this.editora) {
      this.edicao = true;
      this.preencherFormulario()
    }
  }

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    descricao: new FormControl('', [Validators.required, Validators.minLength(3)]),
    endereco: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  preencherFormulario() {
    if (this.edicao) {
      this.formulario.get('nome')?.setValue(this.editora.nome);
      this.formulario.get('descricao')?.setValue(this.editora.descricao)
      this.formulario.get('endereco')?.setValue(this.editora.endereco)
    }
  }

  salvar() {
    const obj: Editora = {
      id: this.edicao ? this.editora.id : this.novoId,
      nome: this.formulario.get('nome')?.value as string,
      descricao: this.formulario.get('descricao')?.value as string,
      endereco: this.formulario.get('endereco')?.value as string,
    }

    if (this.formulario.valid) {
      if (this.edicao) {
        this._crudEditorasService.atualizarEditora(obj);
        const modalRef = this._modalService.open(ModalGenericoComponent)
        modalRef.componentInstance.mensagem = "Editora atualizada com sucesso!";
        modalRef.componentInstance.class = 'success';
        this.activeModal.close();
      } else {
        this._crudEditorasService.incluirEditora(obj)
        const modalRef = this._modalService.open(ModalGenericoComponent)
        modalRef.componentInstance.mensagem = "Editora incluída com sucesso!";
        modalRef.componentInstance.class = 'success';
        this.activeModal.close();
      }
    }

  }
}
