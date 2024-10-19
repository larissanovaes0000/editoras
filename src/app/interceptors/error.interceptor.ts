import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ModalGenericoComponent } from '../modal-generico/modal-generico.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _modalService: NgbModal) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error) {
          const modalRef = this._modalService.open(ModalGenericoComponent)
          modalRef.componentInstance.mensagem = "Algo deu errado. Por favor, tente novamente mais tarde.";
          modalRef.componentInstance.class = 'danger';
        }
        return throwError(error);
      })
    );
  }
}
