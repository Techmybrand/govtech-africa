"use client";
import { useState } from "react";
import { BlogDetailsProps } from "@/interfaces";
import { getBlogPosts, getBlogPostByTitle, formatDate } from "@/utils";

const useGetContentful = () => {
	const [blogs, setBlogs] = useState<BlogDetailsProps[] | null>(null);
	const [blog, setBlog] = useState<BlogDetailsProps | any>(null);

	const fetchBlogs = async () => {
		const getBlogs = await getBlogPosts();

		const arrayOfBlogs = getBlogs?.map((blogs: any) => ({
			...blogs?.fields,
			publishedAt: formatDate(blogs?.sys?.createdAt),
		}));
		setBlogs(arrayOfBlogs);
	};

	const fetchBlog = async (params: string) => {
		// const blogPost = await getEntryBySlug(params);
		const blogPost = await getBlogPostByTitle(params);
		setBlog(blogPost);
	};

	return {
		blogs,
		blog,
		fetchBlogs,
		fetchBlog,
	};
};

export default useGetContentful;
