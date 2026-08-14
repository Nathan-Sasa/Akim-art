export interface IDomaine {
    id: number
    slug: string
    name: string
    description: string
    image: string
}

export interface IService {
    id: number,
    slug: string
    domaine: string,
    name: string,
    description: string,
    images: imagesService[]
}

interface imagesService {
    img: string
}



