import { FC } from 'react'
import { Form, Input, Layout } from 'antd'




const Login: FC = () => {
  return (
    <Layout>
      <Form layout={'vertical'} wrapperCol={{ span: 8 }}>
        <Form.Item label={'Username'}>
          <Input />
        </Form.Item>
      </Form>
    </Layout>
  )
}

export default Login
