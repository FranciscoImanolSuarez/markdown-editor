import React from 'react'
import styles from './Heading.module.css'

export const Heading = ({ children }) => {
  return (
    <h1 className={styles.heading}>
      {children}
    </h1>
  )
}