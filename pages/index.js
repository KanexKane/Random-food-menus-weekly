import { useState, useEffect } from 'react'
import Head from 'next/head'

import { Button, Row, Col, List, Timeline } from 'antd'
import 'antd/dist/antd.css'

import '../styles/Home.module.css'

import DataMenus from '../public/menus.json'

export default function Home() {
  const numberDaysInWeek = 7
  const initialMenus = Array(numberDaysInWeek).fill('')
  const [menus, setMenus] = useState(initialMenus)

  const daysInWeek = [
    'จันทร์',
    'อังคาร',
    'พุธ',
    'พฤหัส',
    'ศุกร์',
    'เสาร์',
    'อาทิตย์',
  ]

  const colorDaysInWeek = [
    'yellow',
    'pink',
    'green',
    'orange',
    'blue',
    'purple',
    'red',
  ]

  const randomMenusWeekly = () => {
    const countMenuAll = DataMenus.length

    const nowMenu = []

    for (let i = 0; i < numberDaysInWeek; i++) {
      let nowRandomNumber

      do {
        nowRandomNumber = Math.floor(Math.random() * Math.floor(countMenuAll))
      } while (nowMenu.includes(nowRandomNumber))

      nowMenu[i] = nowRandomNumber
    }

    setMenus(nowMenu)
  }

  return (
    <div>
      <Head>
        <title>สุ่มเอาสิ ขี้เกียจคิด!</title>
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#b088f9' />
      </Head>

      <Row style={{ marginTop: '1em' }}>
        <Col span={24}>
          <h1 style={{ textAlign: 'center', marginTop: '1em', color: 'white' }}>
            สุ่มเอาสิ ขี้เกียจคิด!
          </h1>
        </Col>
      </Row>
      <Row style={{ marginTop: '2em' }}>
        <Col span={20} offset={2}>
          <List
            itemLayout='horizontal'
            dataSource={menus}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta title={`วัน${daysInWeek[index]}`} />
                <div>
                  {typeof item == 'number' ? DataMenus[item].name : '(ㆆ_ㆆ)'}
                </div>
              </List.Item>
            )}
          />
        </Col>
      </Row>

      <Row style={{ marginTop: '2em' }}>
        <Col span={24}>
          <div style={{ textAlign: 'center' }}>
            <Button shape='round' size='large' onClick={randomMenusWeekly}>
              สุ่มรายการอาหาร
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}
