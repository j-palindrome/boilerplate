import groq from 'groq'
import Client from './client'
import { sanityFetch } from '@/sanity/lib/fetch'
import { ServiceQueryResult, WorkQueryResult } from '@/sanity-types'

const serviceQuery = groq`*[_type == 'services']`
export default async function Work({ children }: React.PropsWithChildren & {}) {
  const data = await sanityFetch<ServiceQueryResult>({ query: serviceQuery })

  return (
    <>
      <Client services={data} />
      {children}
    </>
  )
}
