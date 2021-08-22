import { useRouter } from 'next/router'
import ArtistFrom from '../../../components/ArtistFrom'

import { useGetArtistQuery } from '../../../redux/api'

const Artist = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, error, isLoading } = useGetArtistQuery(id)

  return (
    <>
      { !isLoading &&
        <>
          id: {id}
          <ArtistFrom artist={data} />
        </>
      }
    </>
  )
}

export default Artist