import React from 'react'

export const FormGroup = (props) => {
  return (
    <div className="flex justify-between items-center mb-6">
      {props.children}
    </div>
  )
}
