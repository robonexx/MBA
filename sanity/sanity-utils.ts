import { groq } from "next-sanity";
import { FilmTypes } from "@/types/FilmType";
import { WrittenTypes } from "@/types/WrittenType";
import {client} from './lib/client'

export async function getWorks(): Promise<WrittenTypes[]> {
  return await client.fetch(
    groq`*[_type == "written"]{
      _id,
      _createdAt,
      title,
      author,
      customer,
      year,
      desc,
      duration,
      premier,
      score,
      songUrl,
      "slug": slug.current,
      "image": image.asset->url,
      url
    }`
  )
}

export async function getWork(slug: string): Promise<WrittenTypes> {
  return await client.fetch(
    groq`*[_type == "written" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      author,
      customer,
      year,
      desc,
      duration,
      premier,
      score,
      songUrl,
      "slug": slug.current,
      "image": image.asset->url,
      url
    }`,
    { slug }
  )
}


export async function getFilms(): Promise<FilmTypes[]> {
  return await client.fetch(
    groq`*[_type == "film"]{
      _id,
      createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      producers,
      description,
      links?,
      preview,
    }`
  )
}

export async function getFilm(slug: string): Promise<FilmTypes> {
  return await client.fetch(
    groq`*[_type == "film" && slug.current == $slug][0]{
      _id,
      createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      producers,
      description,
      links?,
      preview,
    }`,
    { slug }
  )
}

export async function getStages(): Promise<FilmTypes[]> {
  return await client.fetch(
    groq`*[_type == "stage"]{
      _id,
      createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      producers,
      description,
      links?,
      preview,
    }`
  )
}

export async function getStage(slug: string): Promise<FilmTypes> {
  return await client.fetch(
    groq`*[_type == "stage" && slug.current == $slug][0]{
      _id,
      createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      producers,
      description,
      links?,
      preview,
    }`,
    { slug }
  )
}

