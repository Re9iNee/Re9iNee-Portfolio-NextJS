import { TypographyTypes } from "@/types/typography.types";

function H1({ children }: TypographyTypes) {
  return (
    <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
      {children}
    </h1>
  );
}

export default H1;
