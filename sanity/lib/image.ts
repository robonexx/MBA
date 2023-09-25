import createImageUrlBuilder from '@sanity/image-url'
import { client } from './client'
import type { Image } from 'sanity'

const builder = createImageUrlBuilder(client)

export const urlForImage = (source: Image) => {
  return builder.image(source).auto('format').fit('max')
}
