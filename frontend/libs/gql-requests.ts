import {ApolloClient, InMemoryCache, NormalizedCacheObject} from "@apollo/client";

export const initClient = (): ApolloClient<NormalizedCacheObject> => {
    return new ApolloClient({
        uri: process.env.API_PATH,
        cache: new InMemoryCache(),
    });
}

export default initClient;