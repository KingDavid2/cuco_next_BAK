import {useState} from "react"
import type { NextPage } from 'next'
import Head from 'next/head'
import { Grid } from '@material-ui/core';
import ArtistCard from '../components/ArtistCard'

const Home: NextPage = () => {

  const [artists, setArtists] = useState([]) 

  return (
    <>
      <Head>
        <title>CUCOARTS | Artists</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        >
        {artists.map(item => { 
          return (
            <Grid item xs>
              <ArtistCard artist={item}/>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default Home