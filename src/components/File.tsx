export enum TYPE {
    direct,
    image,
    music,
    video,
    document,
    excel,
    doc,
    ppt,
    unknow,
}

export interface myFile {
    name: string
    type: TYPE
    uploadDate: Date
    size: number
}