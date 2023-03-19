import { useCallback, useEffect, useState } from "react"

export default function useResize(ref: React.RefObject<HTMLDivElement>) {
  const [width, setWidth] = useState<number | undefined>(
    ref.current?.offsetWidth,
  )

  const setOffsetWidth = useCallback(() => {
    setWidth(ref.current?.offsetWidth)
  }, [ref])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setOffsetWidth()
    })
    return () => {
      window.removeEventListener('resize', () => {
        setOffsetWidth()
      })
    }
  }, [setOffsetWidth])

  useEffect(() => {
    setOffsetWidth()
  }, [setOffsetWidth])


  return {
    width
  }
}