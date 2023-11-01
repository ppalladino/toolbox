import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Toolbox',
  description: 'My Little Toolbox',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Toolbox:</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/quizzes">Quizzes</Link>
          </nav>
        </header>
        <main>
          {children}
        </main>   
      </body>
    </html>
  )
}
