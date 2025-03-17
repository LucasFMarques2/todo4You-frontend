import { InputContainer } from './styles'

export function Input({ placeholder, icon, type, isTextArea, cols, ...rest }) {
  return (
    <InputContainer>
      {icon && <span>{icon}</span>}

      {isTextArea ? (
        <textarea placeholder={placeholder} cols={cols || 20} {...rest} />
      ) : (
        <input placeholder={placeholder} type={type} {...rest} />
      )}
    </InputContainer>
  )
}
