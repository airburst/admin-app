import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ClassValue } from "clsx";

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs));
}

/**
 * Slot component - merges props onto its single child element.
 * Replacement for Radix UI's Slot for the asChild pattern.
 */
interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, ...props }, ref) => {
    if (React.isValidElement<Record<string, unknown>>(children)) {
      const childProps = children.props;
      return React.cloneElement(children, {
        ...props,
        ...childProps,
        ref,
        className: cn(
          props.className,
          childProps.className as string | undefined,
        ),
      });
    }
    return null;
  },
);
Slot.displayName = "Slot";
