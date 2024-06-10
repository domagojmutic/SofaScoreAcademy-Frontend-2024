'use client'
import { useRouter } from 'next/navigation'

export default function SportsPage({ params }: { params: { sport: string } }) {
  const router = useRouter()
  router.push('/' + params.sport + '/events')
  return <></>
}
