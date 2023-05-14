import axios from "axios";

export default function Multi(props){
    let {
        data = {}, slug = 'testing'
    } = props
    return(
        <div>
            <h1>Post Detail - {slug}</h1>
            <div>
                <pre>{
                    typeof(data) !== 'undefined' &&
                    typeof(data) === 'object' &&
                    Object.keys(data).length > 0 &&
                    Object
                        .entries(data)
                        .map(
                            ([key,value])=> {
                    return <div>
                        <span>{key}</span>
                        <span> - </span>
                        <span>{value}</span>
                    </div>
                })
                }</pre>
            </div>
        </div>
    )
}

// export async function getStaticPaths(){
//     let paths = [];
//     await axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//         paths = response.data
//     })

//     if(Array.isArray(paths) && paths.length > 0){
//         paths = paths.map((item) => {
//             params: { id : `${item?.id}`}
//         })
//     }

//     return {
//         paths:paths ?? [],
//         fallback:false
//     }
// }


// export async function getStaticProps(context){
//     let {slug} = context.params;
//     let data = null;

//     await axios.get(
//         'https://jsonplaceholder.typicode.com/posts/${slug}'
//     )
//     .then((response) =>{
//         if(
//             typeof(response?.data) !== 'undefined' &&
//             typeof(response?.data) === 'óbject' &&
//             Object.keys(response?.data).length > 0
//         ) {
//             data = response.data
//         }
         
//     })

//     return {
//         props : {
//             data,slug
//         }
//     }
// }
