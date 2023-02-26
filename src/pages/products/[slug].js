import React, { useState } from "react";
import { client,urlFor } from "lib/client";

const ProductDetails = ({ product, products }) => {
  const { image, name, description, Cost } = product;
  return (
   <div>
    <div className="flex flex-wrap items-center justify-around m-9 ">
      <div className="bg-grey-200 h-[400px] rounded-xl">
        <img src={urlFor(image && image[0])} className="w-[350px] h-[300px]"/>
      </div>
      <div className="grid">
        <span className="text-4xl font-mono">{name}</span>
        <br/>
        <span>{description}</span>
        <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:text-white hover:bg-indigo-600 rounded border border-indigo-700 text-indigo-700 px-8 py-3 text-sm">Add to cart</button>
      </div>
    </div>
   </div>
);
  
}


export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}



export default ProductDetails




