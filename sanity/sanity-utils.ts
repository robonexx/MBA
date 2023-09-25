import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { WrittenTypes } from "@/types/WrittenType";
import clientConfig from './config/clientconfig'

export async function getWorks(): Promise<WrittenTypes[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "work"]{
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
  return createClient(clientConfig).fetch(
    groq`*[_type == "work" && slug.current == $slug][0]{
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


export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  )
}

