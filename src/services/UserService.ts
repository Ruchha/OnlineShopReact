import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { gql } from 'graphql-request'
import {UsersQuery} from "../../gql/graphql"

export const userAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: graphqlRequestBaseQuery({url:"/graphql"}),
    endpoints:(build)=>({
        getAllUsers: build.query<UsersQuery,null>({
            query: () => ({
              document: gql`
              query Users {
                users {
                  created_at
                  email
                  first_name
                  id
                  last_name
                  password
                  updated_at
                }
              }`
            })
        })
    })
})
