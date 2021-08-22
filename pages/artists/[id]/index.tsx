import { useRouter } from 'next/router'
import ArtistCard from '../../../components/ArtistCard'
import { useGetArtistQuery } from '../../../redux/api'

const Artist = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, error, isLoading } = useGetArtistQuery(id)
  
  return (
    <>
      { !isLoading &&
        <>
          <p>Post: {id}</p>
          <ArtistCard artist={data}/>
        </>
      }
    </>
  )
}

export default Artist