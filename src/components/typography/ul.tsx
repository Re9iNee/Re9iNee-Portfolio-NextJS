import { TypographyTypes } from "@/types/typography.types";
export function UL({ children }: TypographyTypes) {
  return <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>{children}</ul>;
}
