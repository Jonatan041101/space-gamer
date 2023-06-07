import { GetCategoryQuery } from '@/__generated__/graphql-types';
import { GET_CATEGORY } from '@/utils/graphql/query';
import { useQuery } from '@apollo/client';
import React from 'react';

export default function useCategory() {
  const { data } = useQuery<GetCategoryQuery>(GET_CATEGORY);
  return data;
}
