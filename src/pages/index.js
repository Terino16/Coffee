
import React from "react"
import {Card, Header } from "components"
import { client } from 'lib/client'
export default function Home({products,banner}) {
 
  return (
    <>
    <Header header={banner.length && banner[0]}  />
    <div className="flex flex-wrap gap-6 justify-center mt-7">
      {products?.map((product) => <Card key={product._id} product={product} />)}
    </div>
    </>
  )
}
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const banner = await client.fetch(bannerQuery);

  return {
    props: { products, banner }
  }
}
