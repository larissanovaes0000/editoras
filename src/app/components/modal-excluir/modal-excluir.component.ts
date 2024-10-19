import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Editora } from '../../interfaces/editora';
import { ModalGenericoComponent } from '../../modal-generico/modal-generico.component';
import { CrudEditorasService } from '../../services/editoras.service';

@Component({
  selector: 'app-modal-excluir',
  templateUrl: './modal-excluir.component.html',
  styleUrl: './modal-excluir.component.scss'
})
export class ModalExcluirComponent {
  @Input() editora!: Editora
  
  activeModal = inject(NgbActiveModal);

  constructor(
    private _crudEditoraService: CrudEditorasService,
    private _modalService: NgbModal
  ) { }

  excluir() {
    console.log(this.editora)
    this._crudEditoraService.excluirEditora(this.editora);
    const modalRef = this._modalService.open(ModalGenericoComponent)
    modalRef.componentInstance.mensagem = "Editora excluída com sucesso!";
    modalRef.componentInstance.class = 'success';
    this.activeModal.close();
  }
}
