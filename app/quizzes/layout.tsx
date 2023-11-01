import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>
        <h2>Quizzes:</h2>
        <nav>
          <Link href="/quizzes/triads">Triads</Link>
        </nav>
      </header>
          
          <div>
          {children}
          </div> 
    </>
  )
}
