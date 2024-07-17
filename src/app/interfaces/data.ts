export interface response {
    license: {
        name: string,
        url: string,
    }
    meanings: {
        antonyms: [],
        definitions: {}[],
        partOfSpeech: string,
        synonyms: string[]
    }[],
    phonetics: {
        audio: string,
        license: {
            name: string,
            url: string,
        }
        sourceUrl: string,
        text?:string,
    }[],
    sourceUrls: string[],
    word: string,
}