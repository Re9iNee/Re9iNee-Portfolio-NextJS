import { TypographyTypes } from "@/types/typography.types";

export function Muted({ children }: TypographyTypes) {
  return <p className='text-sm text-muted-foreground'>{children}</p>;
}
