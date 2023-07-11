

export type Query ={
    asset(id: String!, preview: Boolean, locale: String): Asset
    assetCollection: () => AssetCollection;

    dogBreeds(id: String!, preview: Boolean, locale: String): DogBreeds
    dogBreedsCollection :() => DogBreedsCollection,
    productReview(id: String!, preview: Boolean, locale: String): ProductReview
    productReviewCollection :() => ProductReviewCollection,
    entryCollection: () => EntryCollection
  }
  

  type Asset ={
    sys: Sys!
    contentfulMetadata: ContentfulMetadata!
    title(locale: String): String
    description(locale: String): String
    contentType(locale: String): String
    fileName(locale: String): String
    size(locale: String): Int
    url(transform: ImageTransformOptions, locale: String): String
    width(locale: String): Int
    height(locale: String): Int
    linkedFrom(allowedLocales: [String]): AssetLinkingCollections
  }
  
  type Sys ={
    id: String!
    spaceId: String!
    environmentId: String!
    publishedAt: DateTime
    firstPublishedAt: DateTime
    publishedVersion: Int
  }
  
  type ContentfulMetadata ={
    tags: [ContentfulTag]!
  }
  
  type ContentfulTag ={
    id: String
    name: String
  }
  
  type AssetLinkingCollections ={
    entryCollection: () => EntryCollection
    dogBreedsCollection: () => DogBreedsCollection
    productReviewCollection: () => ProductReviewCollection
  }
  
  type EntryCollection ={
    total: Int!
    skip: Int!
    limit: Int!
    items: [Entry]!
  }
  
  interface Entry {
    sys: Sys!
    contentfulMetadata: ContentfulMetadata!
  }
  
  type DogBreedsCollection ={
    total: Int!
    skip: Int!
    limit: Int!
    items: [DogBreeds]!
  }
  
 interface DogBreeds extends Entry {
    sys: Sys!
    contentfulMetadata: ContentfulMetadata!
    linkedFrom(allowedLocales: [String]): DogBreedsLinkingCollections
    dogBreedName(locale: String): String
    breedOrigination(locale: String): String
    lifeExpectancy(locale: String): Int
    maxLifeExpectancy(locale: String): Int
    friendlinessOfTheBreed(locale: String): Int
    shedLevel(locale: String): Int
    dogImage(preview: Boolean, locale: String): Asset
  }
  
  type DogBreedsLinkingCollections ={
    entryCollection: () => EntryCollection
  }
  
 
  
  type ProductReviewCollection ={
    total: Int!
    skip: Int!
    limit: Int!
    items: [ProductReview]!
  }
  
  interface ProductReview extends Entry {
    sys: Sys!
    contentfulMetadata: ContentfulMetadata!
    linkedFrom(allowedLocales: [String]): ProductReviewLinkingCollections
    shortText(locale: String): String
    image(preview: Boolean, locale: String): Asset
    timeString(locale: String): DateTime
  }
  
  type ProductReviewLinkingCollections ={
    entryCollection: () => EntryCollection
  }
  
  type AssetCollection ={
    total: Int!
    skip: Int!
    limit: Int!
    items: [Asset]!
  }
  
  



  