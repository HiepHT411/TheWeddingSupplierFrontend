import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { Component } from 'react';

function getBase64() {
  return axios
    .get("http://localhost:8080/api/tws/resource/gallery/test", {
      responseType: 'arraybuffer'
    })
    .then(response => new Buffer(response.data, 'binary').toString('base64'))
}

function getImageSrc(){
  return axios.get('http://localhost:8080/api/tws/resource/gallery/test2', { responseType: 'arraybuffer' })
      .then((response) => {
        let image = btoa(
          new Uint8Array(response.data)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        return `data:image/jpg[png];base64,${image}`;
      });
}
export function BlogImages() {

    const [images, setImages] = useState([])

    const inputRef = useRef(null);

    const varRef = useRef(images.length);


    useEffect(() => {
      async function getImage () {
        let imageBlob
        try {
          imageBlob = (await axios.get("http://localhost:8080/api/tws/resource/gallery/test", { responseType: 'blob' })).data
        } catch (err) {
          return null
        }
        return URL.createObjectURL(imageBlob)
      }
      async function getImages () {
        const imageArray = []
        //for (const id of imageIds) {
          imageArray.push(await getImage())
        //}
        setImages(imageArray)
      }
  
      getImages()
    },)
  
    // useEffect(() => {
    //   axios.get('http://localhost:8080/api/tws/resource/gallery/1').then(res=>{
    //     setImages(res.date);
    //       console.log(res);
    //       console.log(res.data);
    //   });
      
    // }, []);
    return (images.map((img) => {
      return ( 
        <div>
          <p>{"data:image/jpg;base64,"+img}</p>
          <img style={{width: 350, height: 175}} src={"data:image/png;base64,"+img} alt="" ></img>
          <img style={{width: 350, height: 175}} src ={getImageSrc()}/>
        </div>
             )
    })
    )
  
}