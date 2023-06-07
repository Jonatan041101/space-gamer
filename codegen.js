// // import { api } from '@/utils/api';
// import { CodegenConfig } from '@graphql-codegen/cli';

// const config: CodegenConfig = {
//   schema:   'http://localhost:3500/graphql',
//  // documents: ['src/**/!(*.d).{ts,tsx}'],
//  documents: ['src/**/*.tsx'],
//   generates: {
//     './src/__generated__/grahpql-types.ts': {
//       preset: 'client',
//       plugins: [
//        // 'typescript','typescript-operations'
//       ],
//       presetConfig: {
//         gqlTagName: 'gql',
//       }
//    },
//    './src/__generated__/graphql.schema.json': {
//     plugins:['introspection']
//    }
//   },
//   ignoreNoDocuments: true,
// };

// export default config;
module.exports = {
  schema: 'http://localhost:3500/graphql',
  documents: 'src/**/!(*.d).{ts,tsx}',
  generates: {
    './src/__generated__/graphql-types.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
    './src/__generated__/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};
