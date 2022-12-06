"use client"
import Link from 'next/link'
import React from 'react'
import { store } from '../../../store'
import { Providers } from '../../providers'
import Popular from './Popular'

function page() {
  return (
    <Providers store={store}>
    <div>

        <Link href="/" >
            
           
        </Link>
        <Popular />
    </div>
    </Providers>
  )
}

export default page