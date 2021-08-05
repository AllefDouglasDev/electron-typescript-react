import { Button } from '../Button'
import { Container, Image, Text } from './styles'
import userService from '../../services/user'

export function Greetings() {
  async function handleSayHello() {
    try {
      const response = await userService.findOne(1)

      console.log('response', response)
    } catch (err) {
      console.log('Error', err)
    }
  }

  return (
    <Container>
      <Image
        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
        alt="ReactJS logo"
      />
      <Text>
        An Electron boilerplate including TypeScript, React, Jest and ESLint.
      </Text>
      <Button onClick={handleSayHello}>Send message to main process</Button>
    </Container>
  )
}
