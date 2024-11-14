export type Fact = {
  readonly _id: string;
  deleted: boolean;
  createdAt: string;
  source: string;
  status: FactStatus;
  text: string;
  type: string;
  updatedAt: string;
  used: boolean;
  __v: number;
  imagePath: Blob;
};

export type FactStatus = {
  sentCount: number;
  verified: boolean;
};
export type FactDetails = Omit<Fact, 'user'> & {
  user: {
    _id: string;
    name: object;
    photo: string;
  };
};
