import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './admin.css'
import { userRequest,publicRequest } from '../requestMethod'
import axios from 'axios'



const Alluser = () => {
const [fillInfo,setFullinfo]=useState([])
useEffect(()=>{
  const getusers =async ()=>{
    const res=await publicRequest.get('/user')
    setFullinfo(res.data)
  }
  getusers()

},[])

console.log('***',fillInfo);
  return (
    <div>
      <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" className='rows'>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>


    </div>
  )
}

export default Alluser
