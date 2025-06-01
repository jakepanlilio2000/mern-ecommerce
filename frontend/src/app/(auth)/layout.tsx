export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="grow bg-auth-bg flex justify-center items-center">{children}</main>;
}
