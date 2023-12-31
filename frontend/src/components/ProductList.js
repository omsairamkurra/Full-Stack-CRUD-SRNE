import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const ProductList = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        getProducts()
    },[])

    const getProducts= async()=>{
        const response=await axios.get("http://localhost:4000/products")
        setProducts(response.data)
    }

    const deleteProduct= async(productId)=>{
      try{
        await axios.delete(`http://localhost:4000/products/${productId}`)
        getProducts()
      }catch(err){
        console.log(err)
      }
    }

  return (
    <div className='container mt-5'>
      <Link to='/add' className='button is-success'>Add New</Link>
      <br/>
        <div className='columns is-multiline'>
            {products.map((product)=>(
                <div className='column is-one-quarter' key={product.id}>
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img 
                      src={product.url} 
                      alt={product.name}
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">{product.name}</p>
                      </div>
                    </div>
                  </div>
                  <footer className='card-footer'>
                    <Link to={`/edit/${product.id}`} className='card-footer-item'>Edit</Link>
                    <a onClick={()=>deleteProduct(product.id)} className='card-footer-item'>Delete</a>
                  </footer>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default ProductList