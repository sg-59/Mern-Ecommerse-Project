import React from 'react'
import styled from 'styled-components'
import { categories } from '../Data'
import Category from './Category'

const Container=styled.div`
    width: 100%;
    height: 50vh;
    margin-top: 9em;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 5em;
    display: flex;
   
`;

const Categories = () => {
  return (
    <Container>
    {categories.map((item)=>(
        <Category item={item} />

    ))}
    </Container>
      
  )
}

export default Categories
