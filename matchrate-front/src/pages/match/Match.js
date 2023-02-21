import React, {useState,useEffect, Fragment} from "react"
import axios from "axios"
import Header from "./Header"
import ReviewForm from "./ReviewForm"
import styled from "styled-components"

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2,1fr);
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

const Match = (/*props*/) => {
    const [match, setMatch] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    const MATCH_URL = `http://localhost:3000/api/v1${window.location.pathname.toString()}`

    useEffect(()=>{
        //console.log(props)

        axios
        .get(MATCH_URL)
        .then(resp => {
            //console.log(resp)
            setMatch(resp.data)
            //console.log(match)
            setLoaded(true)
        } )
        .catch( resp => console.log(resp) )
        //console.log(match)
    },[])

    const handleChange = () => {
        e.preventDefault()
    }

    const handleSubmit = () => {
        e.preventDefault()
    }

    return (
    <Wrapper>
        {loaded && <Fragment>
            <Column>
                <Main>
                    
                        <Header
                            attributes = {match.data.attributes}
                            reviews = {match.included}
                        />
                    
                    <div className="reviews">
                        
                    </div>
                </Main>
            </Column>
            <Column>
                <ReviewForm
                    handleChange = {handleChange}
                    handleSubmit = {handleSubmit}
                    attributes = {match.data.attributes}
                    review={review}
                />
            </Column>
        </Fragment>
        }
    </Wrapper>
    )
}

export default Match