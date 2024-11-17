class Food {
    description: string 
    image: string 
    infos: string[]
    title: string
    number: number
    id: number

    constructor(
        id: number, 
        description: string, 
        image: string, 
        infos: string[], 
        title: string, 
        number: number  
    ) {
        this.id = id
        this.description = description
        this.image = image
        this.infos = infos
        this.title = title
        this.number = number
    }
}

export default Food


