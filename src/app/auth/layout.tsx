export const metadata = {
  title: 'AuthPage',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex justify-center">
      {children}
    </div>
  )
}
