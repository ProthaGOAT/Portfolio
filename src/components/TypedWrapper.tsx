import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

interface Props {
  strings: string[]
  typeSpeed?: number
  backSpeed?: number
  loop?: boolean
  showCursor?: boolean
}

export default function TypedWrapper({ strings, typeSpeed = 50, backSpeed = 30, loop = true, showCursor = true }: Props) {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      typeSpeed,
      backSpeed,
      loop,
      showCursor,
    })

    return () => typed.destroy()
  }, [strings, typeSpeed, backSpeed, loop, showCursor])

  return <span ref={el} />
}
