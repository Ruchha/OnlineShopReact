import {CodegenConfig} from "@graphql-codegen/cli"

const config: CodegenConfig = {
    schema: 'https://monstro.serveo.net/graphql',
    documents: ["./src/services/**.{ts,tsx}"],
    ignoreNoDocuments: true,
    generates: {
        "./gql/":{
            preset:"client",
            plugins:[],
            
        }
    }
}

export default config 