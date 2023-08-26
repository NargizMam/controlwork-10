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
export interface Comment {
    id: number,
    news_id: number,
    author: string,
    message: string
}
export type ApiComment = Omit<Comment, 'id'>