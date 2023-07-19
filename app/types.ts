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

  export type DataDogProps = {
    data: {
      dogBreeds: {
        sys: {
          id: string;
        },
        dogBreedName: string;
        breedOrigination?: string;
        dogImage: {
          url: string;
          alt: string;
          title: string;
        }    
      } 
    }
  }
