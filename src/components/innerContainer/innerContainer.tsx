export function InnerContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-[90%]">{children}</div>;
}
