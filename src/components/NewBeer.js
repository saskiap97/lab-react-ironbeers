import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "./Header"

export default function NewBeer(){

const createABeer = (beerToAdd)=>{
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", beerToAdd)
    .then((response)=>{console.log(response)})
    .catch((err)=>{console.log(err)})
}

const [beerName, setBeerName]=useState('')
const [tagline, setTagline]=useState('')
const [description, setDescription]=useState('')
const [firstBrewed, setFirstBrewed]=useState('')
const [brewersTips, setBrewersTips]=useState('')
const [attenuationLevel, setAttenuationLevel]=useState('')
const [contributedBy, setContributedBy]=useState('')

const handleSubmit = (e)=>{
e.preventDefault();
const beerToAdd = {
    name: beerName,
    tagline: tagline,
    description: description,
    first_brewed: firstBrewed,
    brewers_tips: brewersTips,
    attenuation_level: attenuationLevel,
    contributed_by: contributedBy,
}
createABeer(beerToAdd)
} 

    return(
        <div>
        <Header/>
        <h1>Create a new beer:</h1>
        <form onSubmit={handleSubmit}>

<label> Beer Name: </label>
<input type="text" name="beerName" value={beerName} onChange={(e) => { setBeerName(e.target.value) }}></input>

<label>Tagline:</label>
<input type="text" name="tagline" value={tagline} onChange={(e) => { setTagline(e.target.value) }}></input>

<label>Description:</label>
<input type="text" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }}></input>

<label>First Brewed:</label>
<input type="text" name="firstBrewed" value={firstBrewed} onChange={(e) => { setFirstBrewed(e.target.value) }}></input>

<label>Brewers Tips:</label>
<input type="text" name="brewersTips" value={brewersTips} onChange={(e) => { setBrewersTips(e.target.value) }}></input>

<label>Attenuation Level:</label>
<input type="number" name="attentuationLevel" value={attenuationLevel} onChange={(e) => { setAttenuationLevel(e.target.value) }}></input>

<label>Contributed By:</label>
<input type="text" name="contributedBy" value={contributedBy} onChange={(e) => { setContributedBy(e.target.value) }}></input>


<button type="submit">Submit</button>



        </form>
        </div>
    )
}