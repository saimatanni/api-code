import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import { Table } from 'react-bootstrap'

const MultipleData=()=>{

    const [shopdata, setShopdata] = useState([])
    const [productdata, setProductdata] = useState([])

    const fetchData=()=>{
        const shopApi = `https://dev.api.ghuribazar.com/api/v1/store/shop/list?page=1&size=10`
        const productApi= `https://dev.api.ghuribazar.com/api/v1/store/product/list?page=1&size=10`

        const getShopApi= axios.get(shopApi)
        const getProductApi =axios.get(productApi)

        .then((res) => {
            console.log(res)
            setShopdata(res.data.shops)
            
          })
          .catch(function (error) {
    
            console.log(error);
          })
      }


        axios.all([getShopApi, getProductApi]).then(
            axios.spread((...allData)=>{
                const allDataBazar= allData[0].data.shopID
                const allAPIData = allData[1].productID


                setShopdata(allDataBazar)
                setProductdata(allAPIData)
            })
        )


   useEffect(()=>{
       fetchData()
   }, [])

    return(
        <>
        </>
    )
}
export default MultipleData;