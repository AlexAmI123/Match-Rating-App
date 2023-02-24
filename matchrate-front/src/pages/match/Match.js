import React, {useState,useEffect, Fragment} from "react"
import axios from "axios"
import Header from "./Header"
import ReviewForm from "./ReviewForm"
import Review from "./Review"
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

const Match = () => {
    const [match, setMatch] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    const MATCH_URL = `http://localhost:3000/api/v1${window.location.pathname.toString()}`

    useEffect(()=>{
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

    let reviews
    if(loaded && match.included) {
        reviews = match.included.map( (item, index) => {
            return(
                <Review key = {index}
                attributes = {item.attributes}
                />
            )
        })
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
                    {reviews}
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