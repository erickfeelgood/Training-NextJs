/**
 * @param {Object} props
 * @param {Number} props.id
 * @param {String} props.thumbnail
 * @param {String} props.title
 * @param {String} props.description
 * @returns 
 *
 */
 import React, { useEffect, useState } from "react";

export default function CardComponent(props){
let {id, thumbnail, description,title}=props
const [loading, setloading] = useState(false);

function addToCart(){
    setloading(true)
    setTimeout(()=> {

    },3000)
}

return (
    <section className={'w-auto h-auto min-w-[200px] bg-white rounded-xl app-card'}>

        <div className={'app-card-img'}>
            <img 
            src={thumbnail}
            alt="thumbnail"
            className={'card-img__images max-w-[300px] max-h-[300px]'}
            ></img>
        </div>

        {/* {props?.children} */}

        <div className={'p-4 w-full'}>
            <h3 className="text-black">{title}</h3>
            <p className="text-black">{description}</p>
            <button onClick={addToCart}>
            {
loading ? "Loading" : "Add to cart"
            }
            Masukkan keranjang
            </button>
        </div>
    </section>
)

}