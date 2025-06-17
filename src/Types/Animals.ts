export class Animal {
    id: number;
    name: string;
    latinName: string;
    shortDescription: string;
    longDescription: string;
    isfed: boolean;
    imageUrl: string;
    lastFed: Date;

    constructor(text: string) {
        const data = JSON.parse(text);
        this.id = data.id;
        this.name = data.name;
        this.latinName = data.latinName;
        this.isfed = data.isfed || false; // Default to false if not provided
        this.shortDescription = data.shortDescription;
        this.longDescription = data.longDescription;
        this.imageUrl = data.imageUrl;
        this.lastFed = new Date(data.lastFed);
    }
};