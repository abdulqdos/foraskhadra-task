import { cn } from "@/lib/utils"
import type { HTMLAttributes, ReactNode } from "react"
import pattern from "@/assets/pattern.png"

interface CardEventProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export function CardEvent({ className, children, ...props }: CardEventProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-950 shadow-sm",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}

export function CardEventHeader({ className, children, ...props }: CardEventProps) {
  return (
    <div
      className={cn("flex flex-col gap-1.5 p-6", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardEventTitle({ className, children, ...props }: CardEventProps) {
  return (
    <h3
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    >
      {children}
    </h3>
  )
}

export function CardEventDescription({ className, children, ...props }: CardEventProps) {
  return (
    <p
      className={cn("text-sm text-gray-500", className)}
      {...props}
    >
      {children}
    </p>
  )
}

export function CardEventContent({ className, children, ...props }: CardEventProps) {
  return (
    <div
      className={cn("p-6 pt-0", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardEventFooter({ className, children, ...props }: CardEventProps) {
  return (
    <div
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    >
      {children}
    </div>
  )
}
