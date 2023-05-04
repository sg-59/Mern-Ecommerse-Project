import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Button, Table } from 'react-bootstrap'
import { publicRequest } from '../requestMethod'
import { Link } from 'react-router-dom'
import { kidsproductsDisplay } from '../Redux/Apicall'
import { useDispatch } from 'react-redux'

const Products = () => {
const [products,setproducts]=useState([])
const [mensproducts,setmensproducts]=useState([])
const [womensproducts,setwomensproducts]=useState([])
const dispatch=useDispatch()
useEffect(()=>{

    const display =async ()=>{
        try{
            const res=await publicRequest.get('/kidsproduct')
            setproducts(res.data)
            console.log('kids products',res.data);
            }
            catch(err){
                console.log(err);
            }

            try{
                const datas=await publicRequest.get('/mensproduct')
                setmensproducts(datas.data)
            }catch(err){
                console.log(err);
            }

            
            try{
                const datas=await publicRequest.get('/womensproduct')
                setwomensproducts(datas.data)
            }catch(err){
                console.log(err);
            }
    }
display()
},[])


const updateProducts = (dataID)=>{
kidsproductsDisplay(dispatch,dataID)
}

  return (
    <div>
        <Navbar/>
        <Button className='bg-info'>Create new one</Button>
        <Table striped bordered hover>
    <thead>
     
               <tr>
        <th>Images</th>
        <th>Id</th>
        <th>Category</th>
        <th>Item</th>
        <th>Size</th>
        <th>Description</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
      
   
    </thead>
    <tbody>
        <th style={{textAlign:'end'}}><h3>KIDS SECTION</h3></th>
    {products.map((li)=>(
            <>
      <tr>
        <td><img style={{width:'100px',height:'100px'}} src={li.img}/></td>
        <td>{li._id}</td>
        <td>{li.title}</td>
        <td>{" "+li.categories}</td>
        <td>{" "+li.size}</td>
        <td>{li.desc}</td>
        <Link to={'/creatednewone'}><td><Button  className='bg-success' onClick={()=>updateProducts(li._id)}>Update</Button></td></Link>
        <td><Button  className='bg-danger'>Delete</Button></td>
      </tr>
      </>
        ))}

<th style={{textAlign:'end'}}><h3>Mens SECTION</h3></th>
    {mensproducts.map((li)=>(
            <>
      <tr>
        <td><img style={{width:'100px',height:'100px'}} src={li.img}/></td>
        <td>{li._id}</td>
        <td>{li.title}</td>
        <td>{" "+li.categories}</td>
        <td>{" "+li.size}</td>
        <td>{li.desc}</td>
        <Link to={'/creatednewone'}><td><Button  className='bg-success'>Update</Button></td></Link>
        <td><Button className='bg-danger'>Delete</Button></td>
      </tr>
      </>
        ))}

<th style={{textAlign:'end'}}><h3>Women SECTION</h3></th>
    {womensproducts.map((li)=>(
            <>
      <tr>
        <td><img style={{width:'100px',height:'100px'}} src={li.img}/></td>
        <td>{li._id}</td>
        <td>{li.title}</td>
        <td>{" "+li.categories}</td>
        <td>{" "+li.size}</td>
        <td>{li.desc}</td>
        <Link to={'/creatednewone'}><td><Button  className='bg-success'>Update</Button></td></Link>
        <td><Button className='bg-danger'>Delete</Button></td>
      </tr>
      </>
        ))}
    </tbody>
  </Table>

    </div>
  )
}

export default Products