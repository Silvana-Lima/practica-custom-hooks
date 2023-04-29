import { useLogin } from '../hooks/useLogin'

export const FormUser = () => {
  const { handleEmail, handlePassword, login } = useLogin()

  return (
    <div>
      <form
        action=""
        style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
        onSubmit={(e) => login(e)}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => handleEmail(e)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => handlePassword(e)}
          required
          minLength={6}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
