import { ButtonContainer } from './styles'

export function Button({ title, ...rest }) {
  return <ButtonContainer {...rest}>{title}</ButtonContainer>
}
