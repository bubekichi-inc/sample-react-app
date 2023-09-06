import React, { useState } from 'react'
import { Label } from './Label'
import { FormGroup } from './FormGroup'
import { Input } from './Input'
import { Textarea } from './Textarea'

export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    handleClear()
    alert('送信しました。')
  }

  const handleClear = () => {
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div>
      <div className="max-w-[800px] mx-auto py-10">
        <h1 className="text-xl font-bold mb-10">問合わせフォーム</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label text="お名前" htmlFor="name" />
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(value) => setName(value)}
            />
          </FormGroup>
          <FormGroup>
            <Label text="メールアドレス" htmlFor="email" />
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(value) => setEmail(value)}
            />
          </FormGroup>
          <FormGroup>
            <Label text="本文" htmlFor="message" />
            <Textarea
              id="message"
              value={message}
              onChange={(value) => setMessage(value)}
            />
          </FormGroup>
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg mr-4"
            >
              送信
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="bg-gray-200 font-bold py-2 px-4 rounded-lg"
            >
              クリア
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
