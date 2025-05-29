export const fakeLogin = ({ email, password,userName }) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (email && password && userName) {
        resolve({ email, password,userName })
      } else {
        reject({ message: 'Invalid email or password or userName' })
      }
    })
  )