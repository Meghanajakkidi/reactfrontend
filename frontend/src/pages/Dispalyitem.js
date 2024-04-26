import { useState, useEffect } from "react"

    

function  Dispalyitem(){
    const [list, setlist] = useState([])
   
    useEffect(() => {
        fetch("http://localhost:7000/item/list").then(function (res) {
            return res.json();
        }).then(function (result) {
            setlist(result)
        })


    },[])
    return(
        <div>
            {list.map((item) => {
                            return (
                                <div>{item}</div>
                                 )
                             } ) }
        </div>
    )
}

export default Dispalyitem