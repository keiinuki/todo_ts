import { memo } from "react"

type Props = {
  color: string;
}

export const Message = memo((props:Props) => {
  return <p style={{ color: props.color }}>こんにちは！</p>
});