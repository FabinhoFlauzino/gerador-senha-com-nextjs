import IdCaracteres from "./IdsCaracteres";
import OpcaoCaractere from "./OpcaoCaracteres";

export default class Senha {
  static opcoesTem(id: string, opcoes: OpcaoCaractere[]) {
    const opcao = opcoes.find(o => o.id === id);
    return opcao?.valor
  }
  static gerarSenha(tamanho: number, opcoes: OpcaoCaractere[]) {
    let caracteresPossiveis = ""

    if (Senha.opcoesTem(IdCaracteres.NUMEROS, opcoes)) {
      caracteresPossiveis += "0123456789"
    }

    if (Senha.opcoesTem(IdCaracteres.MAIUSCULAS, opcoes)) {
      caracteresPossiveis += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if (Senha.opcoesTem(IdCaracteres.MINUSCULAS, opcoes)) {
      caracteresPossiveis += "abcdefghijklmnopqrstuvwxyz"
    }

    if (Senha.opcoesTem(IdCaracteres.ESPECIAIS, opcoes)) {
      caracteresPossiveis += "!@#$%&*()+-?.,:;"
    }

    let senha = ""

    for (let i = 0; i < tamanho; i++) {
      const a = Math.floor(Math.random() * caracteresPossiveis.length)
      senha += caracteresPossiveis.charAt(a)
    }

    return senha
  }
}