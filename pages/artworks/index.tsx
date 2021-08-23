import type { NextPage } from 'next'
import Head from 'next/head'
import { Grid } from '@material-ui/core';
import ArtworkCard from '../../components/artworks/ArtworkCard'
import { useGetArtworksQuery } from '../../redux/api'
import { IArtwork } from '../../types/api'

const Artworks: NextPage = () => {
  const { data, error, isLoading } = useGetArtworksQuery(null)
  return (
    <>
      <Head>
        <title>CUCOARTS | Artworks</title>
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
        {!isLoading && data.map((item: IArtwork) => { 
          return (
            <Grid item xs key={item.id}>
              <ArtworkCard artwork={item}/>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default Artworks