export type Post = {
    name: string
    image: string
    minimumBid: number
    description: string
    seller: {
        name: string
        id: string
        image: string
    }
}