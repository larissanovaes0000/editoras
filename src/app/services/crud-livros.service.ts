import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from '../interfaces/livro';
import { BehaviorSubject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudLivrosService {

  private readonly API = "http://localhost:3000/livros";

  private livrosBehaviorSubject = new BehaviorSubject<Livro[]>([]);


  constructor(
    private _http: HttpClient
  ) { }

  setLivros(livros: Livro[]) {
    this.livrosBehaviorSubject.next(livros);
  }

  getLivros() {
    return this.livrosBehaviorSubject;
  }


  obterLivros(){
    return this._http.get<Livro[]>(this.API)
  }

  incluirLivro(livro: Livro){
    return this._http.post(this.API, livro).pipe(take(1))
  }

  excluirLivro(livro: Livro){
    return this._http.delete(`${this.API}/${livro.id}`).pipe(take(1))
  }

  editarLivro(livro: Livro){
    return this._http.put(`${this.API}/${livro.id}`, livro).pipe(take(1))
  }
}
