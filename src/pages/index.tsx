import { styled } from '../styles';

const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$primary'
})

export default function Home() {
  return (
    <>
     <Button>Enviar</Button>
    </>
  )
}
