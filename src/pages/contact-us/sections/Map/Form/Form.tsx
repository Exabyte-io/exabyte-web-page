import { FC, useEffect, useState } from 'react'
import './Form.less'

interface FormProps {
  incomingEmail?: string
}

const Form: FC<FormProps> = ({ incomingEmail = '' }) => {
  const params = new URLSearchParams(window.location.search)
  const [email, setEmail] = useState<string>(incomingEmail)

  useEffect(() => {
    if (params.has('email')) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setEmail(params.get('email'))
    }
  }, [])

  return (
    <form className='contact-us-form'>
      <label htmlFor='first'>First Name</label>
      <input required type='text' id='first-name' placeholder='e.g. Mohanned' />
      <label htmlFor='last'>Last Name</label>
      <input required type='text' id='last-name' placeholder='e.g. Al Ghamdi' />
      <label htmlFor='email'>Email</label>
      <input
        required
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        id='email'
        placeholder='e.g. Mohanned.ghamdi@mail.com'
      />
      <label htmlFor='message'>I Would like to...</label>
      <textarea required id='message' placeholder='Message here' className='tall-input' />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
