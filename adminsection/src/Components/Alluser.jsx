import React from 'react'
import styled from 'styled-components'
import './admin.css'



const Alluser = () => {
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
    <tr>
      <th scope="row" className='rows'>2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row" className='rows'>3</th>
      <td>Larry the Bird</td>
      <td>?</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Alluser
