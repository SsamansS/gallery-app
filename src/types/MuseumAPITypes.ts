export type MuseumArtIDs = number[]

export type ArtType = {
    objectID: number,
    accessionYear: string,
    primaryImage: string,
    primaryImageSmall: string,
    objectName: string,
    culture: string,
    region: string
}

export type ArtsType = ArtType[]