import { useEffect, useState } from 'react'

export default () => {
  const [state, _] = useState(1)

  useEffect(() => {
    console.log('state: ', state)
  }, [])

  return {
    state,
  }
}
