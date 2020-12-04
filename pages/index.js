import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

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

  const randomMenus = () => {
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

  useEffect(() => {
    randomMenus()
  }, [])

  return (
    <div>
      <Head>
        <title>สุ่มรายการอาหารทั้งสัปดาห์</title>
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#b088f9' />
      </Head>

      <div style={{ width: '80%', margin: '2em auto' }}>
        <h1 style={{ textAlign: 'center' }}>สุ่มรายการอาหารทั้งสัปดาห์!</h1>
        {menus.map((item, index) => {
          if (typeof item == 'number') {
            return (
              <div key={index} className='menu-container'>
                <div className='menu-day'>วัน{daysInWeek[index]}:</div>
                <div className='menu-name'>{DataMenus[item].name}</div>
              </div>
            )
          }
        })}
        <div style={{ textAlign: 'center' }}>
          <button className='btn-random' onClick={randomMenus}>
            สุ่มรายการอาหารหน่อย
          </button>
        </div>
      </div>
    </div>
  )
}
