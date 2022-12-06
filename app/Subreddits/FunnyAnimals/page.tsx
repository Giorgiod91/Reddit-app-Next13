"use client"
import Link from 'next/link'
import React from 'react'
import { store } from '../../../store'
import { Providers } from '../../providers'
import FunnyAnimals from './Funnyanimals'

function page() {
  return (
    <Providers store={store}>
    <div>

        <Link href="/" >
            
           
        </Link>
        <FunnyAnimals />
    </div>
    </Providers>
  )
}

export default page