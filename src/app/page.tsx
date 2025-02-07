"use client"

import { useState } from "react"

export default function Home() {
  const [tamanho, setTamanho] = useState<Number>(8)

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl text-gray-200 mb-4 text-center font-bold">Gerador de senhas</h1>
      <div className="w-3/12 bg-slate-700 text-gray-200 rounded-md p-8">
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
      </div>
    </main>
  )
}
