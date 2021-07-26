import { FC, useState } from 'react'
import { Button, Form, FormProps, Input, message, Rate, Select, Typography } from 'antd'
import { ValidateMessages } from 'rc-field-form/lib/interface'
import { useCreateContactFormRequestMutation, useCountriesQuery, ContactFormRequestInput } from '../../graphql'
import Dragger, { UploadChangeParam } from 'antd/lib/upload'

const formProps: FormProps = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
}

const validateMessages: ValidateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
}

const ContactForm: FC = () => {
  const { data, loading } = useCountriesQuery()
  const [createContactFormRequest] = useCreateContactFormRequestMutation()
  const messageKey = 'request'
  const [messageApi, context] = message.useMessage()
  const [rating, setRating] = useState(0)

  const onFinish = (data: ContactFormRequestInput) => {
    messageApi
      .loading(
        {
          content: 'Send your request ...',
          key: messageKey,
        },
        0,
      )
      .then(() =>
        createContactFormRequest({ variables: { input: { data } } })
          .then(
            result =>
              result?.data &&
              message.success(
                {
                  content: `Thanks for your interest, ${result?.data?.createContactFormRequest?.contactFormRequest?.firstName}! Your message received, ${result?.data.createContactFormRequest?.contactFormRequest?.email}`,
                  key: messageKey,
                },
                2000,
              ),
          )
          .catch(reason =>
            messageApi.error(
              {
                content: `Error sending your request: ${reason}`,
                key: messageKey,
              },
              2000,
            ),
          ),
      )
  }

  return (
    <Form {...formProps} onFinish={onFinish} validateMessages={validateMessages}>
      {context}
      <Form.Item name={'firstName'} label='First Name'>
        <Input />
      </Form.Item>
      <Form.Item name={'lastName'} label='Last Name'>
        <Input />
      </Form.Item>
      <Form.Item name={'email'} label='Email' rules={[{ required: true, type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={'country'} label='Email'>
        <Select
          showSearch
          placeholder='Search to Select'
          optionFilterProp='children'
          filterOption={(input, option) => option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          filterSort={(optionA, optionB) =>
            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
          }
        >
          {data?.countries?.map(it => (
            <Select.Option key={it.id} value={it.id}>
              {it.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name={'message'} label='Message' rules={[{ required: false, type: 'string' }]}>
        <Input.TextArea style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...formProps.wrapperCol, offset: 8 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export { ContactForm }
