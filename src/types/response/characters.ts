export type Characters = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  episode: Array<string>;
};

export type CharacterResponse = {
  info: {
    count: number;
    pages: number;
    next: string;
  };
  results: Array<Characters>;
};
