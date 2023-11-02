import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='fill'>
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
