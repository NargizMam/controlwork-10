export interface News {
    id: number,
    title: string,
    text: string,
    image: File | null,
    createdAt: string
}
export interface ApiNews {
    id: string,
    title: string,
    image: string | null,
    createdAt: string
}
export interface NewsMutation {
    title: string,
    text: string,
    image: string | null,
}
export interface ApiComment {
    id: string,
    news_id: string,
    author: string | null,
    message: string
}
export interface CommentsMutation {
  news_id: string,
  author: string ,
  message: string
}
