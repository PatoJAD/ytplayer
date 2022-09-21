/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SearchListResponse {
    "kind": string,
    "etag": object,
    "nextPageToken": string,
    "prevPageToken": string,
    "pageInfo": {
        "totalResults": number,
        "resultsPerPage": number
    },
    "items": [any]
}