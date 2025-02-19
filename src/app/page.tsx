"use client"

import Checkbox from "@/components/Checkbox"
import ExibeSenha from "@/components/ExibeSenha"
import ForcaSenha from "@/components/ForcaSenha"
import opcoes from "@/data/OpcoesCaracteres"
import Senha from "@/model/Senha"
import { useEffect, useState } from "react"

export default function Home() {
  const [tamanho, setTamanho] = useState<number>(8)
  const [tiposCaracteres, setTiposCaracteres] = useState(opcoes)
  const [senha, setSenha] = useState("")
  const [forcaSenha, setForcaSenha] = useState(3)

  useEffect(() => {
    setForcaSenha(Senha.calcularForca(tamanho, tiposCaracteres))
  }, [tamanho, tiposCaracteres])

  const lidaComMudancaChange = (indice: number) => {
    const aux = [...tiposCaracteres]
    aux[indice].valor = !aux[indice].valor
    setTiposCaracteres([...aux])
  }

  const gerarSenha = () => {
    const novaSenha = Senha.gerarSenha(tamanho, tiposCaracteres)
    setSenha(novaSenha)
  }

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl text-gray-200 mb-4 text-center font-bold">Gerador de senhas</h1>
      <div className="w-[300px] bg-slate-700 text-gray-200 rounded-md p-8">
        <div className="flex flex-col gap-3 text-2xl">
          <label className="flex justify-between">
            <span>Tamanho da senha</span>
            <span className="text-blue-500">{tamanho}</span>
          </label>
          <input
            type="range"
            min={3}
            max={30}
            value={tamanho}
            onChange={(e) => setTamanho(+e.target.value)}
          />
        </div>
        <div>
          {
            tiposCaracteres.map((tipo, index) => (
              <Checkbox
                id={`${tipo.nome}-${index}`}
                key={tipo.id}
                selecionado={tipo.valor}
                lidaComMudanca={() => lidaComMudancaChange(index)}
                texto={tipo.nome}
              />
            ))
          }
        </div>

        <ForcaSenha forca={forcaSenha} />

        <button className="
          text-white bg-blue-500 text-lg font-bold 
          w-full rounded-md p-2 mt-3
        "
          onClick={gerarSenha}
        >
          Gerar Senha
        </button>
        <ExibeSenha senha={senha} />
      </div>
    </main>
  )
}
