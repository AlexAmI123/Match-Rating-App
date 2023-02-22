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
            setMatch(resp.data)
            setLoaded(true)
        } )
        .catch( resp => console.log(resp) )
    },[])

    const handleChange = (e) => {
        e.preventDefault()
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value} ))
        console.log("review:", review)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //const csrfToken = document.querySelector('[name=csrf-token]').content
        //axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        const match_id = match.data.id

        axios.post("http://localhost:3000/api/v1/reviews", {review, match_id})
        .then(resp => {
            const included = [...match.included, resp.data.data]
            setMatch({...match, included})
            setReview({title: "", description: "", score: 0})
        })
        .catch(resp => {
        })
    }

    const setRating = (score, e) => {
        e.preventDefault()
        
        setReview({...review, score})
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
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    setRating={setRating}
                    attributes={match.data.attributes}
                    review={review}
                />
            </Column>
        </Fragment>
        }
    </Wrapper>
    )
}

export default Match