import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const MultipleData = () => {

  const shopApi = `https://dev.api.ghuribazar.com/api/v1/store/shop/list?page=1&size=10`;
  const productApi = `https://dev.api.ghuribazar.com/api/v1/store/product/list?page=1&size=10`;

  // const authAxios=axios.create({
  //   baseURL: shopApi,
  //   headers: {
  //     Authorization : `Bearer ${accessToken}`
  //   }
  // })

  const [shopdata, setShopdata] = useState([]);
  const [productdata, setProductdata] = useState([]);

  const fetchData = () => {
    // const shopApi = `https://dev.api.ghuribazar.com/api/v1/store/shop/list?page=1&size=10`;
    // const productApi = `https://dev.api.ghuribazar.com/api/v1/store/product/list?page=1&size=10`;

    axios.get(shopApi)
      .then((res) => {
        console.log(res);
        setShopdata(res.data.shops);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios.get(productApi)
      .then((res) => {
        console.log(res);
        setProductdata(res.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  

  useEffect(() => {
    fetchData();
    //console.log("")
  }, []);

  return (
    <Table >

      <tr>
        
        <td>
          {" "}
          <h5>ownerPhone </h5>{" "}
        </td>
        <td>
          {" "}
          <h5> ownerEmail</h5>{" "}
        </td>
        <td>
          {" "}
          <h5>address </h5>{" "}
        </td>
        
        <td>
          {" "}
          <h5>product ID </h5>{" "}
        </td>
        <td>
          <h5> product Title </h5>{" "}
        </td>
        <td>
          {" "}
          <h5>Product MRP </h5>{" "}
        </td>
      </tr>
      {productdata.map((item, index) => {
        return (
          <tr key={index}>
            <td> {shopdata && shopdata[index].ownerPhone}</td>
            <td> {shopdata && shopdata[index].ownerEmail}</td>
            <td> {shopdata && shopdata[index].address}</td>
            <td> {item && item.productID}</td>
            <td> {item && item.productTitle}</td>
            <td> {item && item.productMRP}</td> 
          </tr>
        );
      })}

      <tbody>{/* {user.map(renderUser)} */}</tbody>
    </Table>
  );
};
export default MultipleData;