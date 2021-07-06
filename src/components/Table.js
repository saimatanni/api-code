import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'



const TableApi = () => {

    const [data, setData] = useState([])


    const user = [
        { name: "tanni", Email: "xyz@x.com", address: "narail", phone: "50" },
        { name: "arni", Email: "xyz@x.com", address: "jessore", phone: "18" },
        { name: "abid", Email: "xyz@x.com", address: "laxmipasha", phone: "13" }
    ]

    const renderUser = (user, index) => {
        return (
            <tr key={index}>
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
            </tr>
        )

    }

    const handelReceiver = () => {

        // axios.get(`https://dev.api.ghuribazar.com/api/v1/store/product/list?page=1&size=10`, { headers: {"Authorization" : Bearer ${tokenStr}} })

        // axios.get(`http://jsonplaceholder.typicode.com/users`)
        axios.get(`https://dev.api.ghuribazar.com/api/v1/store/product/list?page=1&size=10`)


            .then((res) => {
                console.log(res)
                setData(res.data.products)



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

                <td> <h5>product ID </h5> </td>
                <td><h5> product Title </h5> </td>
                <td> <h5>Product MRP </h5> </td>
                {/* <td> <h5>Product Image </h5> </td> */}

            </tr>
            {
                data.map((item, index) =>
                    <tr>
                        <td> {data[0] && data[0].productID}</td>
                        <td> {data[0] && data[0].productTitle}</td>
                        <td> {data[0] && data[0].productMRP}</td>
                        {/* <td> {data[0] && data[0].productThumbnailImage}</td> */}

                    </tr>)


            }


            <tbody>
               

                {/* {user.map(renderUser)} */}
              

                



            </tbody>

        </Table>


    )
}
export default TableApi;