// 'use client';

// import React, { useState, useEffect } from 'react';
// import { request } from 'express';
import axios from 'axios';

async function getData() {
  // const res = await axios.get('http://localhost:8080/api/home') // Assuming backend runs on same domain
  // const udata = res.data.userdata;
  // // console.log("res.json()x :", udata);
  // // console.log(userdata.map(user => ({"idx":user.id, "usernamex":user.name})))

  // // if (!res.ok) {
  // //   throw new Error('Failed to fetch datax')
  // // }
  const res = await axios.get('http://127.0.0.1:8000/apix')
  const udata = res.data;

  return udata
}
// async function getAddData() {
//   const res = await axios.get('http://localhost:8080/api/add') // Assuming backend runs on same domain
//   const udata = res.data.userdata;
//   // console.log("res.json()x :", udata);
//   // console.log(userdata.map(user => ({"idx":user.id, "usernamex":user.name})))

//   // if (!res.ok) {
//   //   throw new Error('Failed to fetch datax')
//   // }

//   return udata
// }

export default async function Home() {
  const data = await getData()
  // const addData = await getAddData()
  
  return (
    <div>
      {/* <div>datax {...data}</div> */}
      {data.map(user => (
        <div key={user.id}>
            <h1>title : {user.fname}</h1>
            <h1>sort_title : {user.lname}</h1>
            <h1>sort_title : {user.emailid}</h1>
            
            <br />
        </div>
      
      ))}
    </div>
  );
}

