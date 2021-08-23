import { useRouter } from 'next/router'
import ArtistFrom from '../../../components/artists/ArtistFrom'

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
          id: {id}
          <ArtistFrom artist={data!} />
        </>
      }
    </>
  )
}

export default Artist