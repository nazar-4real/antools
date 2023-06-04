import './contact.scss'

import { Section } from '../shared/Section'
import { Title } from '../shared/Title'
import { Text } from '../shared/Text'
import { Form } from '../shared/Form'
import { Button } from '../shared/Button'

const Contact = () => (
  <Section className="contact">
    <Title>Become a contributor?</Title>
    <Text className="contact__text">
      Join us and get tips & tricks to become a great Designer and Developer
    </Text>
    <Form
      className="contact__form"
      placeholder="Enter your email...">
      <Button>
        Join Us
      </Button>
    </Form>
  </Section>
)

export default Contact