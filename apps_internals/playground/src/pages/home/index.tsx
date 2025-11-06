import { useState } from 'react'

import { Button } from '@vezham/react'
import {
  Button as ButtonV3,
  FieldError,
  Input,
  Label,
  TextField
} from '@vezham/react/v3'
import { useLogger } from '@vezham/use-logger'

import Posts from './posts'

const NAMESPACE = 'App/Home'

const app = () => {
  const [value, setValue] = useState('')
  const isInvalid = value.length > 0 && value.length < 3

  useLogger.log(NAMESPACE, 'Hello World :)')
  useLogger.debug(NAMESPACE, 'Hello World :)')
  useLogger.info(NAMESPACE, 'Hello World :)')
  useLogger.warn(NAMESPACE, 'Hello World :)')
  useLogger.error(NAMESPACE, 'Hello World :)')
  return (
    <>
      <TextField className="w-64" isInvalid={isInvalid}>
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          placeholder="Enter username"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <FieldError>Username must be at least 3 characters</FieldError>
      </TextField>

      <ButtonV3 children="sdjnkjdskd" />
      <Button children="sdjnkjdskd" variant="solid" color="primary" />
      <div>Welcome to Playground!...</div>
      <Posts />
    </>
  )
}

export default app
