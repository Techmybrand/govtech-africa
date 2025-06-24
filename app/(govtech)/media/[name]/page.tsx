import { BlogDetailsView } from "@/Views";
import { getBlogPostByTitle } from "@/utils";
import { Metadata } from "next";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata(params: any): Promise<Metadata> {
    const { name } = await params;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const blog: any = await getBlogPostByTitle(name);
    const title = blog?.blogTitle as string
    const imageUrl = blog?.bannerImage ? 
        `https:${blog?.bannerImage?.fields?.file?.url}` 
    : 
        `https:${blog?.thumbnail?.fields?.file?.url}`
    let description = '';

    if (blog?.blogContent?.content) {
        for (const content of blog?.blogContent?.content) {
            if (content?.nodeType === 'paragraph' && 
                Array.isArray(content?.content) && 
                content?.content.length > 0 &&
                content?.content[0]?.nodeType === 'text' &&
                content?.content[0]?.value
            ) {
                description = content.content[0].value;
                break;
            }
        }
    }
    
    return {
        title: title,
        description: description,
        keywords: [title, description, 'blog', 'sippy life', 'sippy blog'],
        metadataBase: new URL('https://sippy-blog.vercel.app'),
        openGraph: {
            title: title,
            description: description,
            url: `https://sippy-blog.vercel.app/posts/${name}`,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title
                }
            ],
            type: 'article'
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title
                }
            ]
        }
    };
}

export default function BlogDetailsPage() {
    return (
        <BlogDetailsView />
    )
}