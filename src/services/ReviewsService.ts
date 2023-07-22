import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { gql } from 'graphql-request'
import { ReviewsQuery } from '../../gql/graphql'

export const reviewsAPI = createApi({
    reducerPath: "reviewsAPI",
    baseQuery: graphqlRequestBaseQuery({url:"/graphql"}),
      endpoints:(build)=>({
          getAllReviews: build.query<ReviewsQuery,null>({
              query: () => ({
                document: gql`
                query Reviews {
                    reviews {
                        id
                        rating
                        text
                        user {
                          first_name
                          last_name
                          
                        }
                      }
                }`
              })
          })
      })
  })