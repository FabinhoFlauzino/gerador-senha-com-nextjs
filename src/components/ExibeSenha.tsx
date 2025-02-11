import { IconCopy } from "@tabler/icons-react";
import { useState } from "react";

interface ExibeSenhaProps {
  senha: string;
}

export default function ExibeSenha(props: ExibeSenhaProps) {
  const [mostrarAviso, setMostrarAviso] = useState(false)

  function copiar() {
    navigator.clipboard.writeText(props.senha)
    setMostrarAviso(true)
    setTimeout(() => {
      setMostrarAviso(false)
    }, 2000)
  }

  return (
    <div className="mt-3">
      {props.senha.trim() !== '' && (
        <>
          <span className="font-bold text-lg">Senha Gerada:</span>
          <div className="
            p-2 border bg-gray-100 rounded-md
          text-slate-800 flex justify-between items-center
          ">
            <div className="flex-1 break-words break-all">{props.senha}</div>
            <IconCopy className="hover:text-blue-500 cursor-pointer" onClick={copiar} width={24} height={24}/>
          </div>
        </>
      )}

      {mostrarAviso && (
        <p className="bg-blue-500 text-blue-100 text-sm text-center mt-3 rounded-md p-2">Senha copiada para área de transferência!</p>
      )}
    </div>
  )
}