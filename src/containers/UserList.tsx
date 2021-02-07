import React from 'react';
import { Table, Row, Col, Typography, Layout, Input, Divider } from 'antd';
import { useState, useEffect } from 'react';
import { UserOutlined, SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';
import { User } from '../types/User'
import { columns } from '../utils/table'
import { Spin } from 'antd';
import fetchData from './utils_fetch'
import mapDataToUI from '../utils/mapDataToUI'
import sortUsers from '../utils/sortUsers'

function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [searchResults, setSearchResults] = useState<User[]>([])
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [asc, setAsc] = useState<boolean>(false)
  const [desc, setDesc] = useState<boolean>(false)
  useEffect(() => {
    const runEffect = async () => {
      setIsLoading(true)
      try {
        const data = await fetchData('users')
        setIsLoading(false)
        if (data && data.length) {
          const users = mapDataToUI(data)
          setUsers(users)
        } else {
          console.log('No users found')
          setUsers([])
        }

      } catch (err) {
        console.log(err)
        setUsers([])
      } finally {
        setIsLoading(false)
      }
    }
    runEffect()
  }, [])

  useEffect(() => {
    const regex = new RegExp(searchTerm, 'gi')
    const filteredUsers = users.filter(user => (user.name.match(regex)))
    setSearchResults(filteredUsers)
  }, [searchTerm])

  const setAscending = ((): void => {
    if (asc) return
    const sortedUsers = sortUsers('asc', users)

    setUsers(sortedUsers)
    setAsc(true)
    setDesc(false)

  })

  const setDescending = ((): void => {
    if (desc) return
    const sortedUsers = sortUsers('desc', users)

    setUsers(sortedUsers)
    setAsc(false)
    setDesc(true)

  })

  const onChangeHandler = ((e: React.ChangeEvent<HTMLInputElement>) => (setSearchTerm(e.target.value)))

  return (
    <Layout>
      <Row className="App__row" justify="start">
        <Col span={24} className="App__column">
          <Layout.Header>
            <Typography.Title><UserOutlined className="m-r" />Users List</Typography.Title>
            {isLoading ? (
              <Input placeholder="Type name" className="i-s" onChange={onChangeHandler} disabled />
            ) : (
                <Input placeholder="Type name" className="i-s" onChange={onChangeHandler} />
              )}
          </Layout.Header>
        </Col>
      </Row>
      <Row id="content">
        <Col span={16} offset={4}>
          <SortAscendingOutlined className={"s-o" + (asc ? ` active` : ``)} onClick={setAscending} />
          <SortDescendingOutlined className={"s-o" + (desc ? ` active` : ``)} onClick={setDescending} />
        </Col>
        <Col span={16} offset={4}>
          <Divider />
          {isLoading ? (
            <Spin size="large" />
          ) : (
              <Table columns={columns} dataSource={searchTerm === '' ? users : searchResults} />
            )}
        </Col>
      </Row>
    </Layout >
  );
}

export default UserList;