import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
          <h2>Quizes</h2>
          <nav>
            <Link href="/quizes/triads">Triads</Link>
          </nav>
          <div>
          {children}
          </div> 
    </div>
  )
}
