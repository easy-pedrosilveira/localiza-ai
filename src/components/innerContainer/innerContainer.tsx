import { twMerge } from "tailwind-merge";

export function InnerContainer({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={twMerge(
        `w-[90%] flex items-center justify-between`,
        className
      )}
    >
      {children}
    </div>
  );
}
