import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-generico',
  templateUrl: './modal-generico.component.html',
  styleUrl: './modal-generico.component.scss'
})
export class ModalGenericoComponent {

  @Input() mensagem: string = "Sucesso!";
  @Input() class: string = "success";

  activeModal = inject(NgbActiveModal);
}
