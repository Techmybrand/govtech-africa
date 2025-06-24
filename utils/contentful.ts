import { createClient } from 'contentful';
// import { formatURL } from '.';

// const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
// const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const SPACE_ID = 'jy8xa6d4nxhkyuit';
const ACCESS_TOKEN = '5KSzMMdUz27a8ELqiDncUm3dQLLisYfYjmNeVBJ7hOYyttr2b1k3d4g6c7a8f8e';

if (!SPACE_ID || !ACCESS_TOKEN) {
    throw new Error("Contentful SPACE_ID and ACCESS_TOKEN must be defined in your environment variables.");
}

export const createContentClient = () => {
  return createClient({
    space: SPACE_ID || '',
    accessToken: ACCESS_TOKEN || '',
  });
};

const client = createContentClient();

export const getBlogPosts = async () => {
  const response = await client.getEntries({
    content_type: 'sippyBlog',
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return response?.items?.map((item: any) => item);
};

export const getEntryBySlug = async (slug?: string) => {
  const response = await client.getEntries({
    content_type: 'sippyBlog',
    'fields.slug': slug,
  });
  return response.items[0]?.fields || null;
};

export async function getBlogPostByTitle(titleSlug: string) {
  // const entries = await client.getEntries({
  //   content_type: 'sippyBlog',
  //   'fields.blogTitle[match]': titleSlug?.replace(/-/g, ' '),
  // });
  // // console.log('entries', entries);
  // const blog = entries?.items[0]?.fields || null;
  // // console.log('blog: ', blog);
  // if (blog && formatURL(blog.blogTitle as string) === titleSlug) {
  //   return blog;
  // }
  // return blog;
  console.log(titleSlug);
  
}