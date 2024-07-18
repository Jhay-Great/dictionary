export interface response {
  license: {
    name: string;
    url: string;
  };
  meanings: {
    antonyms: [];
    definitions: {
      antonyms: string[];
      definition: string;
      synonyms: string[];
    }[];
    partOfSpeech: string;
    synonyms: string[];
  }[];
  phonetics: {
    audio: string;
    license: {
      name: string;
      url: string;
    };
    sourceUrl: string;
    text?: string;
  }[];
  sourceUrls: string[];
  word: string;
}

export interface error {
  message: string;
  resolution: string;
  title: string;
}
