import React from 'react'
import { TopNav } from './TopNav/TopNav'
import styles from './Header.module.scss';
import { MiddleNav } from './MiddleNav/MiddleNav';
import { BottomNav } from './BottomNav/BottomNav';
import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs';


export const Header = () => {
  return (
    <div className={styles.header}>
      <TopNav/>
      <MiddleNav/>
      <BottomNav/>
      <Breadcrumbs/>
    </div>
  )
}
