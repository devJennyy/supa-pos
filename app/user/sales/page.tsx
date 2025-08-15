import Categories from '@/components/sales/Categories'
import ItemSelection from '@/components/sales/ItemSelection'
import React from 'react'

const Page = () => {
  return (
    <main className="flex flex-1 flex-col gap-8 lg:p-5 p-4">
      <Categories />
      <ItemSelection />
    </main>
  )
}

export default Page
