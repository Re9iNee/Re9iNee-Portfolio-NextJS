import { TypographyTypes } from "@/types/typography.types";

export function H3({ children }: TypographyTypes) {
  return (
    <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
      {children}
    </h3>
  );
}
