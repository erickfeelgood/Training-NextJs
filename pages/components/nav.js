import propTypes from "prop-types"

export default function Nav (props){
console.log('props ',props)
const {name,age,array,data} = props
    return(
        <div className="bg-green-200">
           Name : {name}
           <div>
               AGE : {5 + age}
           </div>
           {/* <div>
               data : {Array(data)}
           </div> */}
        </div>
    )
}

Nav.propTypes = {
    name: propTypes.string.isRequired,
    age: propTypes.number.isRequired,
    data: propTypes.arrayOf(propTypes.shape({
        id:propTypes.number.isRequired,
        title:propTypes.string.isRequired
    }))
}