import { useEffect, useState } from 'react';

export const TypingText = ({ texts }: { texts: string[] }) => {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [direction, setDirection] = useState(false)

  const addChar = () => {
    if (text.length < texts[idx].length) {
      setText(prev => prev += texts[idx][text.length])
    } 
    if (text.length === texts[idx].length - 1) {
      setDirection(true)
    }
  }

  const removeChar = () => {
    if (text.length > 0) {
      setText(prev => prev.slice(0, prev.length - 1))
    } 
    if (text.length === 1) {
      setIdx(prev => prev !== texts.length - 1 ? 0 : prev + 1)
      setDirection(false)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (direction) removeChar()
      else addChar()
    }, 100)
  }, [text])

  return text
};