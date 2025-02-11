import IdCaracteres from "@/model/IdsCaracteres"
import OpcaoCaractere from "@/model/OpcaoCaracteres"

const opcoes: OpcaoCaractere[] = [
  { id: IdCaracteres.NUMEROS, nome: "Números", valor: true },
  { id: IdCaracteres.MAIUSCULAS, nome: "Letras Maiúsculas", valor: false },
  { id: IdCaracteres.MINUSCULAS, nome: "Letras Minúsculas", valor: false },
  { id: IdCaracteres.ESPECIAIS, nome: "Caractéres Especiais", valor: false },
]

export default opcoes