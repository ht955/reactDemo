import React, {  useEffect ,useState  } from 'react'
 import { useAppDispatch } from '@/hooks/redux'
import { setUserInfo, setToken } from '@/store/slices/user'
import type { FormProps } from 'antd';
import { Skeleton,Card,Button, Checkbox, Form, Input} from 'antd'
import { DotChartOutlined } from '@ant-design/icons';
import './index.css';
type FieldType = {
  username?:string,
  password?:string,
  remember?:string,
}
const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log(values,'valuesvaluesvaluesvaluesvaluesvaluesvaluesvalues');
}
const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login: React.FC = () => {
  let [loading,setLoading] = useState(true);
  const dispatch = useAppDispatch()
  const setInfo = () => {
    dispatch(setUserInfo({name:'ht',role:'超级管理员'}))
    dispatch(setToken('######'))
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
  },3000)
  
})
  
  return (
    <main className='main_box'>
     <Card
    hoverable
        style={{ width: 540}}
  >
      <Skeleton loading={loading} active>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </Skeleton  >
    </Card>
    </main>

  )
}
 
export default Login