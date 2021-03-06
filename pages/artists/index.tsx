import type { NextPage } from 'next'
import Head from 'next/head'
import { Grid } from '@material-ui/core';
import ArtistCard from '../../components/artists/ArtistCard'
import { useGetArtistsQuery } from '../../redux/api'
import { IArtist } from '../../types/api'

const Artists: NextPage = () => {
  const { data, error, isLoading } = useGetArtistsQuery(null)
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
        {!isLoading && data.map((item: IArtist) => { 
          return (
            <Grid item xs key={item.id}>
              <ArtistCard artist={item}/>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default Artists