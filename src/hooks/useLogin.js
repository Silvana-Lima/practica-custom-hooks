import { useState } from 'react'

export const useLogin = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const handleEmail = (e) => setEmail(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)
  const login = (e) => {
    e.preventDefault()

    console.log({
      email: email,
      password: password,
    })
  }

  return { handleEmail, handlePassword, login }
}
