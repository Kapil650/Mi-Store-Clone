import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js"
import "../styles/ProductReviews.css"

const ProductReviews = ({productReviews}) => {
  return (
    <div className='ProductReviews'>
    {
        productReviews.map((items,index)=>{
           return(
           
            <ProductReviewCard image={items.image} index= {index} key={items.image} review ={items.review} name={items.name} price={items.price} />
      
           )
            
        })
    }
    </div>
  )
}

export default ProductReviews