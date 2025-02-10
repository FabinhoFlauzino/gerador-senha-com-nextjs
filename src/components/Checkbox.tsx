interface CheckboxProps {
  id: string
  texto: string
  selecionado: boolean
  lidaComMudanca: () => void
}

export default function Checkbox(props: CheckboxProps) {
  return (
    <div className="flex text-xl gap-2">
      <input
        id={props.id}
        type="checkbox"
        checked={props.selecionado}
        onChange={props.lidaComMudanca}
      />
      <label className="text-base" htmlFor={props.id}>{props.texto}</label>
    </div>
  )
}