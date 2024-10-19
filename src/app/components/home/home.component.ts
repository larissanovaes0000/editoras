import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Livro } from '../../interfaces/livro';
import { ModalExcluirComponent } from '../modal-excluir/modal-excluir.component';
import { ModalIncluirEditarComponent } from '../modal-incluir-editar/modal-incluir-editar.component';
import { CrudLivrosService } from '../../services/crud-livros.service';
import { CrudEditorasService } from '../../services/editoras.service';
import { Editora } from '../../interfaces/editora';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  listaLivros!: Livro[];
  listaEditoras: Editora[] = [];

  constructor(
    private _modalService: NgbModal,
    private _crudEditoraService: CrudEditorasService
  ) { }

  ngOnInit() {
    //this.obterEditoras()
    this.obterEditoras()
  }

  obterEditoras() {
    this.listaEditoras = this._crudEditoraService.obterEditoras();
  }

  excluir(editora: Editora) {
    console.log(editora)
    const modalRef = this._modalService.open(ModalExcluirComponent);
    modalRef.componentInstance.editora = editora;
    modalRef.closed.subscribe(() => this.obterEditoras());
  }

  abrirModal(editora?: Editora) {
    const modalRef = this._modalService.open(ModalIncluirEditarComponent);
    modalRef.componentInstance.editora = editora;
    modalRef.componentInstance.novoId = this.listaEditoras.length + 1;
    modalRef.closed.subscribe(() => this.obterEditoras())
  }
}
