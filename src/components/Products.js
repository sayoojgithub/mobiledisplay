import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products(){
    
    const products=[{"id":1,"model":"Apple I Phone","desc":"Apple iphone 13 pro 256GB","price":80000,"qty":1,"image":"https://securecontent.jackyselectronics.com/Images/product-images/iPhone_13_Pro_Silver_PDP_Image_position-1A_EN.jpg"},
    {"id":2,"model":"HUAWEI Y70","desc":"HUAWEI nova Y70 128GB","price":30000,"qty":1,"image":"https://www.priceinsouthafrica.com/wp-content/uploads/2020/04/Xiaomi-Mi-10-Lite-Zoom-Price-in-South-Africa-1024x1024.jpg"},
   {"id":3,"model":"NOKIA G11","desc":"Nokia G11 Android 64GB","price":20000,"qty":1,"image":"https://th.bing.com/th/id/OIP.Putz7JrCojlCKNsyLj0RSwHaHq?pid=ImgDet&rs=1"},
    {"id":4,"model":"REDMI 10C","desc":"Xiaomi Redmi 10C 4G 128GB","price":22000,"qty":1,"image":"https://www.androidheadlines.com/wp-content/uploads/2020/05/Redmi-X10-Pro-5G-image-1.jpg"},
    {"id":5,"model":"SAMSUNG S21","desc":"Samsung Galaxy S21 Ultra 5G","price":60000,"qty":1,"image":"https://media.extra.com/s/aurora/100230264_800/Samsung-Galaxy-S21-Plus-5G-256GB-Phantom-Silver?locale=en-GB,en-*,*"},
    {"id":6,"model":"xiaomi","desc":"Phantom black 4GB RAM","price":11000,"qty":1,"image":"https://media.aws.alkosto.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/9/6941059624608_004.jpg"},
    {"id":7,"model":"OPPO A31","desc":"Mystery Black 6GB RAM","price":12000,"qty":1,"image":"https://th.bing.com/th/id/OIP.Z40bT8RdzgqNjLNxvJrvdQHaHa?pid=ImgDet&rs=1"},
    {"id":8,"model":"I KALL Z1","desc":"5.5 Inch Display 4GB RAM","price":5000,"qty":1,"image":"https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/I-Kall-4G-Big-Screen-Android-Mobile-(K201)-1.jpg"},
]
  const [items,setitems]=useState(products)
  function decqty(id){
    const newitem=items.map(function(value,index){
        return(
            value.id===id && value.qty>1?{...value,qty:value.qty-1}:value
        )
    })
    setitems(newitem)

  }
  function incqty(id){
    const newitem=items.map(function(value,index){
        return(
            value.id===id?{...value,qty:value.qty+1}:value
        )
    })
    setitems(newitem)

  }










    return(
        <div>
            <h1 className="bg-info text-white text-center" >Products</h1>
            {items.map(function(value,index){
                return(
                    <div className="d-inline-flex" key={value.id}>
                        <Card className="shadow p-3 m-2 bg-body rounded" style={{ width: '19rem' }}>
      <Card.Img variant="top" src={value.image} style={{height:'15rem'}} />
      <Card.Body>
        <Card.Title>{value.model}</Card.Title>
        <Card.Text>
           {value.desc}
            <h5>price:₹{value.price}</h5>
            <p>
                Qty:
                <Button onClick={function(){decqty(value.id)}} className="m-1">-</Button>{value.qty}<Button onClick={function(){incqty(value.id)}} className="m-1">+</Button>
            </p>
          
        </Card.Text>
        <Button  variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>

                    </div>

                )
            })}
            
            


        </div>
    )
}
export default Products;