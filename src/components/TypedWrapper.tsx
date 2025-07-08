// src/components/TypedWrapper.tsx

import { useEffect, useRef } from 'react'
import TypedJS from 'typed.js'

type Props = {
  strings: string[]
  typeSpeed?: number
  backSpeed?: number
  loop?: boolean
  className?: string
}

export default function Typed({ strings, typeSpeed = 50, backSpeed = 30, loop = false, className = '' }: Props) {
  const elRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const typed = new TypedJS(elRef.current!, {
      strings,
      typeSpeed,
      backSpeed,
      loop,
    })
    return () => typed.destroy()
  }, [strings, typeSpeed, backSpeed, loop])

  return <span ref={elRef} className={className} />
}
