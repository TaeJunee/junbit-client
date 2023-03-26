import { debounce } from 'lodash'
import { useEffect, useMemo, useState } from 'react'

export default function useResize(ref: React.RefObject<HTMLDivElement>) {
  const [width, setWidth] = useState<number | undefined>(
    ref.current?.offsetWidth
  )
  const [height, setHeight] = useState<number | undefined>(
    ref.current?.offsetHeight
  )

  const setOffsetWidth = useMemo(() =>
    debounce(() => {
      setWidth(ref.current?.offsetWidth)
    }, 500)
  , [ref])


  const setOffsetHeight = useMemo(() =>
    debounce(() => {
      setHeight(ref.current?.offsetHeight)
    }, 500)
  , [ref])


  useEffect(() => {
    window.addEventListener('resize', () => {
      setOffsetWidth()
      setOffsetHeight()
    })
    return () => {
      window.removeEventListener('resize', () => {
        setOffsetWidth()
        setOffsetHeight()
      })
    }
  }, [setOffsetWidth, setOffsetHeight])

  useEffect(() => {
    setOffsetWidth()
    setOffsetHeight()
  }, [setOffsetWidth, setOffsetHeight])

  return {
    width,
    height,
  }
}
