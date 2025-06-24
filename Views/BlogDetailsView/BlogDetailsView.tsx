import React from 'react';
import { MediaForm } from '@/shared';
import { BlogDetails, Registration } from '@/components';

const BlogDetailsView = () => {
  return (
    <>
      <BlogDetails />
      <MediaForm title='Join Africa’s leading media at #AGW2025.' />
      <Registration />
    </>
  )
}

export default BlogDetailsView