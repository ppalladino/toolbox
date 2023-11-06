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
          <Link href="/quizzes/intervals">Intervals</Link>
          <Link href="/quizzes/circle-of-fifths">Fifths</Link>
        </nav>
      </header>
      {children}
    </section>
  )
}
