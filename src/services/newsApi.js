import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApiHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "6c13503ba0msh43c5f7947d5da83p1d2698jsn27d07cb78c07",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: newsApiHeaders });
let cat = "";
export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (obj) =>
        createRequest(
          `/news/search?q=${obj.newsCat}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${obj.count}`
        ),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
