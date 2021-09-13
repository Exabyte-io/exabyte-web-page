import { FC, useEffect, useState } from 'react'
import './Form.less'

interface FormProps {
  incomingEmail?: string
}

const Form: FC<FormProps> = ({ incomingEmail = '' }) => {
  const params = new URLSearchParams(window.location.search)
  const [email, setEmail] = useState<string>(incomingEmail)

  useEffect(() => {
    const email = params.has('email') && params.get('email')
    if (typeof email === 'string') {
      setEmail(email)
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
