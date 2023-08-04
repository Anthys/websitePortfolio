import React from 'react'
import { useField } from '@formiz/core'

export const MyField = (props) => {
    const { errorMessage, isValid, setValue, value } = useField(props)

    return (
      <div>
        <input
          value={value ?? ''}
          onChange={e => setValue(e.target.value)}
        />
        {
          !isValid
          && errorMessage // Display error message
        }
      </div>
    )
}