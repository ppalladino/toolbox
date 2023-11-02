import dynamic from 'next/dynamic'
 
// Server Component:
const PageContent = dynamic(() => import('./pageContent'), { ssr: false })
 
export default function TriadQuizServerComponent() {
  return (
    <div>
      <PageContent />
    </div>
  )
}