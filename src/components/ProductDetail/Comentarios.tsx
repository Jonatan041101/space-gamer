'use client';
import InputSquare from '@/atoms/InputSquare';
import React, { useState } from 'react';
import AllComents from './AllComents';
import { posts } from './OptionsList';
import { useBearStore } from '@/store/store';
import { useMutation } from '@apollo/client';
import { CreatePostMutation } from '@/__generated__/graphql-types';
import { CREATE_POST } from '@/utils/graphql/query';
// ★
interface Props extends posts {
  id: string;
}

interface NewPost {
  name: string;
  text: string;
  rating: number;
}
const stars = [
  { id: 1380, value: 1 },
  { id: 1381, value: 2 },
  { id: 1382, value: 3 },
  { id: 1383, value: 4 },
  { id: 1384, value: 5 },
];
type Name = 'name' | 'text' | 'rating';
export default function Comentarios({ post, id }: Props) {
  const { user } = useBearStore((state) => state);
  const [createPost] = useMutation<CreatePostMutation>(CREATE_POST);
  const [newPost, setNewPost] = useState<NewPost>({
    name: user?.name ?? '',
    rating: 1,
    text: '',
  });
  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setNewPost({ ...newPost, [name]: value });
    } else {
      setNewPost({ ...newPost, text: value });
    }
  };
  const handleCreatePost = () => {
    createPost({
      variables: {
        name: newPost.name,
        text: newPost.text,
        rating: newPost.rating,
        productId: id,
      },
    });
    setNewPost({ name: user.name ?? '', rating: 1, text: '' });
  };

  return (
    <div className="options__description">
      <h2 className="options__title">Dejanos tu comentario</h2>
      <div className="options__comment">
        {user.hasOwnProperty('name') ? (
          <div>
            <h3>Tu Nombre</h3>
            <p className="options__username">{user.name}</p>
          </div>
        ) : (
          <InputSquare
            value={newPost.name}
            handleChange={handleChange}
            placeholder=""
            name="name"
            input
            labelText="Tu Nombre"
          />
        )}
        <div className="options__flex">
          <h3 className="options__h3">Selecciona un puntaje</h3>
          <div className="options__stars">
            {stars.map((star) => (
              <span key={star.id}>{'★'}</span>
            ))}
          </div>
        </div>
      </div>
      <InputSquare
        value={newPost.text}
        handleChange={handleChange}
        placeholder=""
        labelText="Tu Comentario"
      />
      <button className="options__btn" onClick={handleCreatePost}>
        Enviar
      </button>
      <AllComents post={post} />
    </div>
  );
}
