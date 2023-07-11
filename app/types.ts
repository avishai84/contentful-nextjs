export type QueryDataProps = {
    data:{
      data:{
        dogBreedsCollection:{
          items:[DogProps]
      }
    }
  }
};

export type DogProps = {
    sys:{
        id: string
    },
    dogBreedName: string;
    shedLevel: number,
    dogImage: {
      title: string
      url:string
      size?: number
      alt:string;
    }
  }