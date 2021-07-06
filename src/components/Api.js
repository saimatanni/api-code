import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap'



const Api = () => {

    const [data, setData] = useState([])
    

  

    const handelReceiver = () => {

        
        axios.get(`https://dev.api.ghuribazar.com/api/v1/store/shop/list?page=1&size=10`)
        
    
          .then((res) => {
            console.log(res)
            setData(res.data.shops)
    
          })
          .catch(function (error) {
    
            console.log(error);
          })
      }

   
    
      useEffect(() => {
        handelReceiver()
        
    
      }, [])
    

    return (
        <Table striped bordered hover>
          
                <tr>

                    <td><h5> Shop ID</h5></td>
                    <td> <h5>Address</h5></td>
                    <td><h5> Shope Name</h5></td>
                    <td><h5>ownerPhone </h5></td>
                    
                </tr>
          {
               data.map((item, index)=> 
              <tr>
                   <td> {data[0] && data[0].shopID}</td> 
                   <td> {data[0] && data[0].address}</td> 
                   <td> {data[0] && data[0].shopName}</td> 
                   {/* <td> {data[0] && data[0].shopImage}</td> */}
                   <td> {data[0] && data[0].ownerPhone}</td>  
                
              </tr>)

              
           } 
          
            
            <tbody>
                
               
            

       
            </tbody>
            
        </Table>
     

    )
}
export default Api;