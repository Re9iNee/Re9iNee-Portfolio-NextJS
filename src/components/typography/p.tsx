import { TypographyTypes } from "@/types/typography.types";

export function P({ children }: TypographyTypes) {
  return <p className='leading-7 [&:not(:first-child)]:mt-6'>{children}</p>;
}
