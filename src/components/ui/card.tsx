// components/ui/card.tsx
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type CardOwnProps<E extends ElementType> = {
  as?: E;
  interactive?: boolean;
  children?: ReactNode;
  className?: string;
};

type CardProps<E extends ElementType> = CardOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof CardOwnProps<E>>;

/**
 * Card — structural container primitive.
 *
 * Design rule: no card elevation, no border-radius, no box-shadow.
 * Hierarchy comes from a hairline border and typography alone, consistent
 * with the rest of the system (see globals.css design-rule comment).
 *
 * `interactive` opts into a hover/focus-within accent border — use this
 * for cards that wrap a single primary link/action (e.g. ProjectCard),
 * not for purely static containers.
 */
export function Card<E extends ElementType = "div">({
  as,
  interactive = false,
  className,
  children,
  ...props
}: CardProps<E>) {
  const Component = as || "div";

  return (
    <Component
      className={cn(
        "relative border border-border bg-bg-elevated",
        interactive && [
          "transition-colors duration-base ease-out",
          "hover:border-accent",
          "focus-within:border-accent",
        ],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
