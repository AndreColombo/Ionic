/* eslint-disable eol-last */
export interface IPessoa {
  nome: string;
  nascimento: string;
  cartaz: string;
  genero: string;
  pagina?: string /* a ? indica que o campo não é obrigatório */;
  favorito: boolean;
}
