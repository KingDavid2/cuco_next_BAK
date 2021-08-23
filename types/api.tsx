export interface IArtist {
  id?: string,
  name?: string,
  lastName?: string,
  link?: string,
  subheader?: string,
  description?: string,
  image?: string
}

export interface IArtwork {
  id?: string,
  user_id?: string,
  title?: string,
  description?: string,
  height?: string,
  depth?: string,
  width?: string,
  can_sell?: string,
  price?: string,
  quantity?: string,
  images?: Array<string>
}
