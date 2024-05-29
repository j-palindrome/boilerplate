'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import { Pt } from 'pts'
import { useSelectedLayoutSegment } from 'next/navigation'
import groq from 'groq'
import { ServiceQueryResult } from '@/sanity-types'

export default function Client({ services }: { services: ServiceQueryResult }) {
  const role = useSelectedLayoutSegment()
  return (
    <div className={`flex items-center w-full`}>
      {services.map(service => (
        <div key={service._id}>{service.title}</div>
      ))}
    </div>
  )
}
