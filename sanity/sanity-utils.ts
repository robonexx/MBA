import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { WorkTypes } from "@/types/WorkType";
import clientConfig from './config/clientconfig'
import { Page } from "@/types/Page";
import { Blog } from "@/types/Blog";

export async function getWorks(): Promise<WorkTypes[]> {
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

export async function getWork(slug: string): Promise<WorkTypes> {
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

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  )
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  )
}

export async function getBlogs(): Promise<Blog[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "blog"]{
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
  
  export async function getBlog(slug: string): Promise<Blog> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "blog" && slug.current == $slug][0]{
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