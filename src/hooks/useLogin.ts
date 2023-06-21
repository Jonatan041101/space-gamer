'use client';
import { GetLoginUserQuery } from '@/__generated__/graphql-types';
import { GET_LOGIN_USER } from '@/utils/graphql/query';
import { useLazyQuery } from '@apollo/client';
import React from 'react';

export default function useLogin() {
  const [getLogin] = useLazyQuery<GetLoginUserQuery>(GET_LOGIN_USER);
  return { getLogin };
}
