import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from "../../redux/actions"
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { todoListSelector , searchTextSelector ,todoReminingSelector  } from '../../redux/selectors'

export default function TodoList() {
  const dispath = useDispatch()
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')

  // useSelector : 1 function , lấy ra từng dữ liệu trong store
  // const todoList = useSelector(todoListSelector)
  // const searchText = useSelector(searchTextSelector)
    const todoList = useSelector(todoReminingSelector)

  const handleButtonClick = () => {
    // dispath() gửi đi một function
    dispath(addTodo({
      id: uuidv4(),
      name: todoName,
      priority: priority,
      completed: false,
    }));
    setTodoName('');
    setPriority("Medium");
  }
  const handleInputChange = (e) => {
    setTodoName(e.target.value)
  }
  const handlePriorityChange = (value) => {
    setPriority(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => <Todo key={todo.id} name={todo.name} prioriry={todo.priority} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
