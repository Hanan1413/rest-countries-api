import React from 'react'
import Country from './Country'
import styles from './Countries.module.css'

const Countries = ({data}) => {
  return (
    <div className={styles.countries}>
    {data.slice(0, 6).map((country, index) =>{
        return <Country key={index} country ={country}/>
    })}

      
    </div>
  )
}

export default Countries
