export class Animals {
    id: number;
    name: string;
    latinName: string;
    yeaarOfBirth: number;
    shortDescription: string;
    longDescription: string;
    imageUrl: string;
    medicine: string;
    isFed: boolean;
    lastFed: Date;

    constructor(text: string) {
        const data = JSON.parse(text);
        this.id = data.id;
        this.name = data.name;
        this.latinName = data.latinName;
        this.yeaarOfBirth = data.yeaarOfBirth;
        this.shortDescription = data.shortDescription;
        this.longDescription = data.longDescription;
        this.imageUrl = data.imageUrl;
        this.medicine = data.medicine;
        this.isFed = data.isFed;
        this.lastFed = new Date(data.lastFed);
    }
};