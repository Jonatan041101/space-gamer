import { GetBrandQuery } from '@/__generated__/graphql-types';
import { GET_BRAND } from '@/utils/graphql/query';
import { useQuery } from '@apollo/client';

export default function useBrand() {
  const { data } = useQuery<GetBrandQuery>(GET_BRAND);
  return data;
}
