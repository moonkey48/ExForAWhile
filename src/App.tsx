import React, { useState } from 'react';
import './App.css';
import { Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function App() {
  const [searching, setSearching] = useState(false)
  const handleSearching = () =>{
    setSearching(true)
    setTimeout(()=>{
      setSearching(false)
    },3000)
  }
  return (
    <>
    <h1>hello</h1>
    <Space direction='horizontal'>
      <Space wrap>
        <Button onClick={handleSearching} type='primary' loading={searching} icon={<SearchOutlined/>}>search</Button>
      </Space>
    </Space>
    </>
  );
}

export default App;
