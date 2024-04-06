export interface Event{
    id: number
    title: string
    recurring: boolean
    fee: number
    description: string
    image: string
    places: {
        name: string
    }
}

export interface Place{
    name: string
    id: number
    image: string
    description: string
    location: string
}