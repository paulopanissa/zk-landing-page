'use client'

import { trackEvent } from '@/lib/analytics'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string
  eventParams?: Record<string, string | number>
}

export default function TrackedLink({
  eventName,
  eventParams,
  onClick,
  children,
  ...props
}: Props) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    trackEvent(eventName, eventParams)
    onClick?.(e)
  }
  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  )
}
