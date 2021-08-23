import { useRouter } from 'next/router'
import ArtistCard from '../../../components/artists/ArtistCard'
import { useGetArtistQuery } from '../../../redux/api'

const Artist = () => {
  const router = useRouter()
  // const { id } = router.query
  const id = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id || ''
  const { data, error, isLoading } = useGetArtistQuery(id)
  
  return (
    <>
      { !isLoading &&
        <>
          <p>Post: {id}</p>
          <ArtistCard artist={data!}/>
        </>
      }
    </>
  )
}

export default Artist