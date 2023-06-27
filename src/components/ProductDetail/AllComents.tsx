import React from 'react';
import TitleProducts from '../TitleProducts';
import { posts } from './OptionsList';
import PostProduct from './PostProduct';
interface Props extends posts {}
export default function AllComents({ post }: Props) {
  return (
    <div className="posts">
      <TitleProducts title={`${post?.length ?? '0'} Comentarios`} />
      {post.map((post) => (
        <PostProduct key={post.id} post={post} />
      ))}
    </div>
  );
}
