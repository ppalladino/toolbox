import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <header>
        <strong>Quizzes:</strong>
        <nav>
          <Link href="/quizzes/triads">Triads</Link>
        </nav>
      </header>
      {children}
    </section>
  )
}
