export class UpdateProfileDto {
    name: string
    description: string

    constructor(id: string, name: string, description: string) {
        this.name = name
        this.description = description
    }
}