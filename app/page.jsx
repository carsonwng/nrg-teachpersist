"use client"

import Image from 'next/image'
import { Heading, TextInput } from '@carbon/react'
import { PasswordInput } from 'carbon-components-react'
import styles from "./styles.module.scss"

const Home = () => {
  return (
    <div className={styles.padded_container}>
      <div className={styles.login_container}>
        <Heading>
          Log in.
        </Heading>
        <TextInput
          labelText="YRDSB username"
          // placeholder=''
          helperText="eg. 34xxxxxxx"
        />

        <PasswordInput
          labelText="YRDSB password"
        />
      </div>
    </div>
  )
}

export default Home