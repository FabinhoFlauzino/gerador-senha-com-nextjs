interface BarraProps {
  corFundo: string
}

export default function Barra(props: BarraProps) {
  return (
    <span className={`ml-2 p-1.5 w-3 h-8 rounded-sm border-2 border-gray-100 ${props.corFundo}`}></span>
  )
}