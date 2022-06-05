interface CharacterListInfo {
  count: number;
  pages: number;
  next: null | string;
  prev: null | string;
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface GetCharactersResponse {
  info: CharacterListInfo;
  results: Character[];
}
