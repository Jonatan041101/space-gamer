import { Post } from '@/__generated__/graphql-types';
import React from 'react';

interface Props {
  post: Post;
}
function parseDate(date: Date | null | undefined) {
  if (!date) return;
  return date.toLocaleString('es-AR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
export default function PostProduct({ post }: Props) {
  const date = new Date(Number(post.date));
  const DATE = parseDate(date);
  return (
    <article className="posts__article">
      <div className="posts__info">
        <span className="posts__name">{post?.name}</span>
        <span className="posts__date">{DATE}</span>
        <span className="posts__rating">{'★'.repeat(post?.rating)}</span>
      </div>
      <p className="posts__text">{post?.text}</p>
    </article>
  );
}
