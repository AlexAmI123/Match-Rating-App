import React, {useState,useEffect} from "react"
import axios from "axios"
import Header from "./Header"
import styled from "styled-components"

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2,1fr);

    // border: 1px solid #efefef;
    // background: white;
    // text-align: center;
`
const Column = styled.div`
    background: white;
    height: 100vh;
    overflow: scroll;

    &:last-child {
        background: black;
    }
`
const Main = styled.div`
    padding-left: 50px;
`

const Match = (props) => {
    const [match, setMatch] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        const url = `http://localhost:3000/api/v1${window.location.pathname.toString()}`
        
        //console.log(props)

        axios.get(url)
        .then( resp => {
            //console.log(resp)
            setMatch(resp.data)
            //setLoaded(true)
        } )
        .catch( resp => console.log(resp) )
    })
    // return (
    // <Wrapper>
    //     <Column>
    //         <Main>
    //             {loaded && 
    //                 <Header
    //                     attributes = {Match.data.attributes}
    //                     reviews = {Match.included}
    //                 />
    //             }
    //             <div className="reviews">
                    
    //             </div>
    //         </Main>
    //     </Column>
    //     <Column>
    //         <div className="header">
                
    //         </div>
    //         <div className="review-form">
    //             [Review form goes here.]
    //         </div>
    //     </Column>
    // </Wrapper>
    // )
}

export default Match