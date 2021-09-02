import { FC } from 'react'
import './Form.less'

const Form: FC = () => {
  return (
    <form className='contact-us-form'>
      <label htmlFor='first'>First Name</label>
      <input type='text' id='first-name' placeholder='e.g. Mohanned' />
      <label htmlFor='last'>Last Name</label>
      <input type='text' id='last-name' placeholder='e.g. Al Ghamdi' />
      <label htmlFor='email'>Email</label>
      <input type='text' id='email' placeholder='e.g. Mohanned.ghamdi@mail.com' />
      <label htmlFor='message'>I Would like to...</label>
      <textarea id='message' placeholder='Message here' className='tall-input' />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
