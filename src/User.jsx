import './user.css';
import { useEffect, useState } from 'react'


export function User(){
    return(
        <> 
        <h1> This is User Page </h1>
        </>
    )
}

export function Userapi(){
    const  [arryData,setarryData] = useState([])

    useEffect(() => { 
        fetch ('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json()) 
        .then((res) => setarryData(res))
    
},[])
console.log(arryData)

return(
    <>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
               
            </tr>
        </thead>
        <tbody>
            { 
            arryData.map((val) => {
                return(
            <tr>
                <td>{val.id}</td>
                <td>{val.title} </td>
                <td>{val.body} </td>
            </tr>
                )
             })
            }
        </tbody>
    </table>
    </>
)
}