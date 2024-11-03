import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type About = {
  __typename?: 'About';
  content: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type AboutInput = {
  content: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type AllCategories = {
  __typename?: 'AllCategories';
  categories: Array<Category>;
  count: Scalars['Int']['output'];
};

export type AllCharacteristics = {
  __typename?: 'AllCharacteristics';
  characteristics: Array<Characteristic>;
  count: Scalars['Int']['output'];
};

export type AllCollections = {
  __typename?: 'AllCollections';
  collections: Array<Collection>;
  count: Scalars['Int']['output'];
};

export type AllHolidays = {
  __typename?: 'AllHolidays';
  count: Scalars['Int']['output'];
  holidays: Array<Holiday>;
};

export type AllOrders = {
  __typename?: 'AllOrders';
  count: Scalars['Int']['output'];
  orders: Array<Order>;
};

export type AllPosts = {
  __typename?: 'AllPosts';
  count: Scalars['Int']['output'];
  posts: Array<Post>;
};

export type AllReviews = {
  __typename?: 'AllReviews';
  count: Scalars['Int']['output'];
  reviews: Array<Review>;
};

export type AllRubrics = {
  __typename?: 'AllRubrics';
  count: Scalars['Int']['output'];
  rubrics: Array<Rubric>;
};

export type AllTags = {
  __typename?: 'AllTags';
  count: Scalars['Int']['output'];
  tags: Array<Tag>;
};

export type AllTypes = {
  __typename?: 'AllTypes';
  count: Scalars['Int']['output'];
  types: Array<Type>;
};

export type AuthLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthRegisterInput = {
  email: Scalars['String']['input'];
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  user: User;
};

export type Billing = {
  __typename?: 'Billing';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  phone: Scalars['String']['output'];
  profile: Profile;
  profileId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Block = {
  __typename?: 'Block';
  content: Scalars['String']['output'];
  heading: Scalars['String']['output'];
};

export type BlockInput = {
  content: Scalars['String']['input'];
  heading: Scalars['String']['input'];
  type?: InputMaybe<BlockType>;
};

export enum BlockType {
  HomeFirst = 'HOME_FIRST',
  HomeSecond = 'HOME_SECOND',
  HomeThird = 'HOME_THIRD'
}

export type CallRequestInput = {
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type Catalog = {
  __typename?: 'Catalog';
  block?: Maybe<Block>;
  categories: Array<Category>;
  filters: Filters;
  products: Array<Product>;
  productsCount: Scalars['Int']['output'];
  rootCategory?: Maybe<Category>;
};

export type CatalogInput = {
  categoryInput: QueryCategoryInput;
  categorySlug?: InputMaybe<Scalars['String']['input']>;
  productInput: QueryProductInput;
};

export type CatalogProduct = {
  __typename?: 'CatalogProduct';
  count: Scalars['Int']['output'];
  products: Array<Product>;
};

export type Category = {
  __typename?: 'Category';
  categories: Array<Category>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  imagePath?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parent?: Maybe<Category>;
  parentId?: Maybe<Scalars['Int']['output']>;
  products: Array<Product>;
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type CategoryInput = {
  block?: InputMaybe<BlockInput>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<SelectInput>;
  seo?: InputMaybe<SeoInput>;
};

export type Characteristic = {
  __typename?: 'Characteristic';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  productId: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  type: CharacteristicType;
  updatedAt: Scalars['DateTime']['output'];
};

export type CharacteristicInput = {
  name: Scalars['String']['input'];
  type: CharacteristicSelectInput;
};

export type CharacteristicSelectInput = {
  name: Scalars['String']['input'];
  value: CharacteristicType;
};

export enum CharacteristicType {
  Collection = 'COLLECTION',
  Color = 'COLOR',
  Country = 'COUNTRY',
  Hue = 'HUE',
  Manufacturer = 'MANUFACTURER',
  Material = 'MATERIAL'
}

export type Collection = {
  __typename?: 'Collection';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type CollectionInput = {
  name: Scalars['String']['input'];
};

export type Color = {
  __typename?: 'Color';
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  images: Array<Scalars['String']['output']>;
  product: Product;
  productId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ColorInput = {
  color: Scalars['String']['input'];
  images: Array<Scalars['String']['input']>;
};

export type CreateFolderInput = {
  folderPath: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CurrentProduct = {
  __typename?: 'CurrentProduct';
  product?: Maybe<Product>;
  similarProducts: Array<Product>;
};

export type EditFileOrFolderNameInput = {
  newPath: Scalars['String']['input'];
  oldPath: Scalars['String']['input'];
};

export type File = {
  __typename?: 'File';
  createdAt: Scalars['DateTime']['output'];
  extension: Scalars['String']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['String']['output'];
};

export type Filters = {
  __typename?: 'Filters';
  collections: Array<FiltersItem>;
  colors: Array<FiltersItem>;
  countries: Array<FiltersItem>;
  holidays: Array<FiltersItem>;
  hues: Array<FiltersItem>;
  manufacturers: Array<FiltersItem>;
  materials: Array<FiltersItem>;
  price: RangeFilter;
  sizes: Array<FiltersItem>;
  types: Array<ImageFilter>;
};

export type FiltersItem = {
  __typename?: 'FiltersItem';
  count: Scalars['Int']['output'];
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Folder = {
  __typename?: 'Folder';
  count: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['String']['output'];
};

export type FolderWithChild = {
  __typename?: 'FolderWithChild';
  childrens: Array<FolderWithChild>;
  createdAt: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type ForBuyers = {
  __typename?: 'ForBuyers';
  content: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ForBuyersInput = {
  content: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Holiday = {
  __typename?: 'Holiday';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type HolidayInput = {
  name: Scalars['String']['input'];
};

export type ImageFilter = {
  __typename?: 'ImageFilter';
  iconPath: Scalars['String']['output'];
  uncheckedIconPath?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createCharacteristic: Characteristic;
  createCollection: Collection;
  createFolder: Scalars['String']['output'];
  createHoliday: Holiday;
  createPost: Post;
  createProduct: Product;
  createReview: Review;
  createRubric: Rubric;
  createTag: Tag;
  createType: Type;
  deleteCategory: Category;
  deleteCharacteristic: Characteristic;
  deleteCollection: Collection;
  deleteFileOrFolder: Scalars['String']['output'];
  deleteHoliday: Holiday;
  deleteOrder: Order;
  deletePost: Post;
  deleteProduct: Product;
  deleteReview: Review;
  deleteRubric: Rubric;
  deleteTag: Tag;
  deleteType: Type;
  duplicateCategory: Category;
  duplicateCharacteristic: Characteristic;
  duplicateCollection: Collection;
  duplicateHoliday: Holiday;
  duplicatePost: Post;
  duplicateProduct: Product;
  duplicateReview: Review;
  duplicateRubric: Rubric;
  duplicateTag: Tag;
  duplicateType: Type;
  editFileOrFolderName: Scalars['String']['output'];
  login: AuthResponse;
  logout: Scalars['Boolean']['output'];
  placeOrder: Order;
  register: AuthResponse;
  sendCallRequest: Scalars['Boolean']['output'];
  toggleCategory: Category;
  toggleCharacteristic: Characteristic;
  toggleCollection: Collection;
  toggleHoliday: Holiday;
  togglePost: Post;
  toggleProduct: Product;
  toggleReview: Review;
  toggleRubric: Rubric;
  toggleTag: Tag;
  toggleType: Type;
  updateAbout: About;
  updateCategory: Category;
  updateCharacteristic: Characteristic;
  updateCollection: Collection;
  updateForBuyers: ForBuyers;
  updateHoliday: Holiday;
  updateOrder: Order;
  updatePage: Scalars['Boolean']['output'];
  updatePost: Post;
  updateProduct: Product;
  updateReview: Review;
  updateRubric: Rubric;
  updateShippingAndPayment: ShippingAndPayment;
  updateTag: Tag;
  updateType: Type;
  uploadFiles: Scalars['String']['output'];
};


export type MutationCreateFolderArgs = {
  data: CreateFolderInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteCharacteristicArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteFileOrFolderArgs = {
  path: Scalars['String']['input'];
};


export type MutationDeleteHolidayArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteRubricArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteTypeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateCharacteristicArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateCollectionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateHolidayArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePostArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateReviewArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateRubricArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateTagArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateTypeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationEditFileOrFolderNameArgs = {
  data: EditFileOrFolderNameInput;
};


export type MutationLoginArgs = {
  data: AuthLoginInput;
};


export type MutationPlaceOrderArgs = {
  data: PlaceOrderInput;
};


export type MutationRegisterArgs = {
  data: AuthRegisterInput;
};


export type MutationSendCallRequestArgs = {
  data: CallRequestInput;
};


export type MutationToggleCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleCharacteristicArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleCollectionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleHolidayArgs = {
  id: Scalars['Int']['input'];
};


export type MutationTogglePostArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleReviewArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleRubricArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleTagArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleTypeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateAboutArgs = {
  data: AboutInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateCharacteristicArgs = {
  data: CharacteristicInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateCollectionArgs = {
  data: CollectionInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateForBuyersArgs = {
  data: ForBuyersInput;
};


export type MutationUpdateHolidayArgs = {
  data: HolidayInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateOrderArgs = {
  data: UpdateOrderInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  type: PageType;
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateReviewArgs = {
  data: ReviewInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateRubricArgs = {
  data: RubricInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateShippingAndPaymentArgs = {
  data: ShippingAndPaymentInput;
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateTypeArgs = {
  data: TypeInput;
  id: Scalars['Int']['input'];
};


export type MutationUploadFilesArgs = {
  data: UploadFilesInput;
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  items: Array<OrderItem>;
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  status: OrderStatus;
  total: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  color?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  order: Order;
  orderId: Scalars['Int']['output'];
  product: Product;
  productId: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  size?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum OrderStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  InProcess = 'IN_PROCESS',
  Pending = 'PENDING'
}

export type Page = {
  __typename?: 'Page';
  blocks?: Maybe<Array<Block>>;
  seo?: Maybe<Seo>;
};

export type PageInput = {
  blocks?: InputMaybe<Array<BlockInput>>;
  seo?: InputMaybe<SeoInput>;
};

export enum PageType {
  Catalog = 'CATALOG',
  Home = 'HOME',
  Posts = 'POSTS'
}

export type PaginationInput = {
  page?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['String']['input']>;
};

export type PlaceOrderInput = {
  items: Array<PlaceOrderItemInput>;
  name: Scalars['String']['input'];
  orderStatus: OrderStatus;
  phone: Scalars['String']['input'];
  total: Scalars['String']['input'];
};

export type PlaceOrderItemInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
  size?: InputMaybe<Scalars['String']['input']>;
};

export type Post = {
  __typename?: 'Post';
  bigPoster: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  excerpt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  poster: Scalars['String']['output'];
  rubrics: Array<Rubric>;
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type PostInput = {
  bigPoster: Scalars['String']['input'];
  description: Scalars['String']['input'];
  excerpt: Scalars['String']['input'];
  name: Scalars['String']['input'];
  poster: Scalars['String']['input'];
  rubrics: Array<SelectInput>;
  seo?: InputMaybe<SeoInput>;
};

export type Product = {
  __typename?: 'Product';
  boughtTimes: Scalars['Int']['output'];
  categories: Array<Category>;
  characteristics: Array<Characteristic>;
  collections: Array<Collection>;
  colors: Array<Color>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  holidays: Array<Holiday>;
  iconPath?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  images: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  oldPrice?: Maybe<Scalars['String']['output']>;
  orderItems: Array<OrderItem>;
  packageQuantity: Scalars['Int']['output'];
  price: Scalars['String']['output'];
  seo: Seo;
  sizes: Array<Size>;
  sku: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  status: Status;
  tags: Array<Tag>;
  typeId: Scalars['Int']['output'];
  types: Array<Type>;
  updatedAt: Scalars['DateTime']['output'];
  views: Scalars['Int']['output'];
};

export type ProductInput = {
  categories: Array<SelectInput>;
  characteristics: Array<SelectInput>;
  collections: Array<SelectInput>;
  colors: Array<ColorInput>;
  description: Scalars['String']['input'];
  holidays: Array<SelectInput>;
  iconPath?: InputMaybe<Scalars['String']['input']>;
  images: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  oldPrice?: InputMaybe<Scalars['String']['input']>;
  packageQuantity: Scalars['String']['input'];
  price: Scalars['String']['input'];
  seo?: InputMaybe<SeoInput>;
  sizes: Array<SizeInput>;
  sku: Scalars['String']['input'];
  tags: Array<SelectInput>;
  types: Array<SelectInput>;
};

export type Profile = {
  __typename?: 'Profile';
  avatarPath: Scalars['String']['output'];
  billing: Billing;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  login: Scalars['String']['output'];
  password: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type ProfileResponse = {
  __typename?: 'ProfileResponse';
  user: User;
};

export type Query = {
  __typename?: 'Query';
  about: About;
  catalog: Catalog;
  categories: AllCategories;
  categoryById: Category;
  categorySeo?: Maybe<Seo>;
  characteristicById: Characteristic;
  characteristics: AllCharacteristics;
  collectionById: Collection;
  collections: AllCollections;
  folderItems: StorageItem;
  folders: Array<FolderWithChild>;
  forBuyers: ForBuyers;
  holidayById: Holiday;
  holidays: AllHolidays;
  orderById: Order;
  orders: AllOrders;
  page: Page;
  pageBlock?: Maybe<Block>;
  pageSeo?: Maybe<Seo>;
  postById: Post;
  postBySlug: Post;
  postSeo?: Maybe<Seo>;
  posts: AllPosts;
  productById: Product;
  productBySlug: CurrentProduct;
  productSeo?: Maybe<Seo>;
  products: CatalogProduct;
  profile: ProfileResponse;
  reviewById: Review;
  reviews: AllReviews;
  rubricById: Rubric;
  rubrics: AllRubrics;
  shippingAndPayment: ShippingAndPayment;
  sitemap: Sitemap;
  tagById: Tag;
  tags: AllTags;
  typeById: Type;
  types: AllTypes;
  users: Array<User>;
};


export type QueryCatalogArgs = {
  data: CatalogInput;
};


export type QueryCategoriesArgs = {
  query: QueryCategoryInput;
};


export type QueryCategoryByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCategorySeoArgs = {
  slug: Scalars['String']['input'];
};


export type QueryCharacteristicByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCharacteristicsArgs = {
  query: QueryInput;
};


export type QueryCollectionByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCollectionsArgs = {
  query: QueryInput;
};


export type QueryFolderItemsArgs = {
  folderPath: Scalars['String']['input'];
  query: PaginationInput;
};


export type QueryHolidayByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryHolidaysArgs = {
  query: QueryInput;
};


export type QueryOrderByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryOrdersArgs = {
  query: QueryInput;
};


export type QueryPageArgs = {
  type: PageType;
};


export type QueryPageBlockArgs = {
  type: BlockType;
};


export type QueryPageSeoArgs = {
  type: PageType;
};


export type QueryPostByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPostBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryPostSeoArgs = {
  slug: Scalars['String']['input'];
};


export type QueryPostsArgs = {
  query: QueryInput;
};


export type QueryProductByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryProductSeoArgs = {
  slug: Scalars['String']['input'];
};


export type QueryProductsArgs = {
  isPopular?: InputMaybe<Scalars['Boolean']['input']>;
  query: QueryProductInput;
};


export type QueryReviewByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryReviewsArgs = {
  query: QueryInput;
};


export type QueryRubricByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRubricsArgs = {
  query: QueryInput;
};


export type QueryTagByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTagsArgs = {
  query: QueryInput;
};


export type QueryTypeByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTypesArgs = {
  query: QueryInput;
};

export type QueryCategoryInput = {
  isParents?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
  status?: InputMaybe<Status>;
};

export type QueryInput = {
  page?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
  status?: InputMaybe<Status>;
};

export type QueryProductInput = {
  collections?: InputMaybe<Array<Scalars['String']['input']>>;
  colors?: InputMaybe<Array<Scalars['String']['input']>>;
  countries?: InputMaybe<Array<Scalars['String']['input']>>;
  holidays?: InputMaybe<Array<Scalars['String']['input']>>;
  hues?: InputMaybe<Array<Scalars['String']['input']>>;
  manufacturers?: InputMaybe<Array<Scalars['String']['input']>>;
  materials?: InputMaybe<Array<Scalars['String']['input']>>;
  max?: InputMaybe<Scalars['String']['input']>;
  min?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<Array<Scalars['String']['input']>>;
  sort: Sort;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  types?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type RangeFilter = {
  __typename?: 'RangeFilter';
  max: Scalars['Int']['output'];
  min: Scalars['Int']['output'];
};

export type Review = {
  __typename?: 'Review';
  author: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  photo: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewInput = {
  author: Scalars['String']['input'];
  content: Scalars['String']['input'];
  photo: Scalars['String']['input'];
};

export type Rubric = {
  __typename?: 'Rubric';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  posts: Array<Post>;
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type RubricInput = {
  name: Scalars['String']['input'];
};

export type SelectInput = {
  name: Scalars['String']['input'];
  value: Scalars['Int']['input'];
};

export type Seo = {
  __typename?: 'Seo';
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type SeoInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type ShippingAndPayment = {
  __typename?: 'ShippingAndPayment';
  paymentContent: Scalars['String']['output'];
  paymentName: Scalars['String']['output'];
  shippingContent: Scalars['String']['output'];
  shippingName: Scalars['String']['output'];
};

export type ShippingAndPaymentInput = {
  paymentContent: Scalars['String']['input'];
  paymentName: Scalars['String']['input'];
  shippingContent: Scalars['String']['input'];
  shippingName: Scalars['String']['input'];
};

export type Sitemap = {
  __typename?: 'Sitemap';
  categoriesSlugs: Array<Scalars['String']['output']>;
  postsSlugs: Array<Scalars['String']['output']>;
  productsSlugs: Array<Scalars['String']['output']>;
};

export type Size = {
  __typename?: 'Size';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  oldPrice?: Maybe<Scalars['String']['output']>;
  price: Scalars['String']['output'];
  product: Product;
  productId: Scalars['Int']['output'];
  size: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SizeInput = {
  oldPrice?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['String']['input'];
  size: Scalars['String']['input'];
};

export enum Sort {
  Newest = 'NEWEST',
  Oldest = 'OLDEST'
}

export enum Status {
  Hidden = 'HIDDEN',
  Published = 'PUBLISHED'
}

export type StorageItem = {
  __typename?: 'StorageItem';
  count: Scalars['Int']['output'];
  files: Array<File>;
  folders: Array<Folder>;
};

export type Tag = {
  __typename?: 'Tag';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  imagePath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type TagInput = {
  imagePath: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Type = {
  __typename?: 'Type';
  createdAt: Scalars['DateTime']['output'];
  iconPath: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
  status: Status;
  uncheckedIconPath?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TypeInput = {
  iconPath: Scalars['String']['input'];
  name: Scalars['String']['input'];
  uncheckedIconPath: Scalars['String']['input'];
};

export type UpdateOrderInput = {
  orderStatus: OrderStatus;
};

export type UploadFilesInput = {
  data: Array<Scalars['Upload']['input']>;
  folderPath: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isVerified: Scalars['Boolean']['output'];
  orders: Array<Order>;
  profile: Profile;
  role: UserRole;
  updatedAt: Scalars['DateTime']['output'];
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type LoginMutationVariables = Exact<{
  data: AuthLoginInput;
}>;


export type LoginMutation = { login: { user: { role: UserRole, profile: { login: string, email: string, avatarPath: string } } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { logout: boolean };

export type RegisterMutationVariables = Exact<{
  data: AuthRegisterInput;
}>;


export type RegisterMutation = { register: { user: { role: UserRole, profile: { login: string, email: string, avatarPath: string } } } };

export type CreateCategoryMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateCategoryMutation = { createCategory: { id: number } };

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteCategoryMutation = { deleteCategory: { id: number } };

export type DuplicateCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateCategoryMutation = { duplicateCategory: { id: number } };

export type ToggleCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleCategoryMutation = { toggleCategory: { id: number } };

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: CategoryInput;
}>;


export type UpdateCategoryMutation = { updateCategory: { id: number } };

export type CreateCharacteristicMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateCharacteristicMutation = { createCharacteristic: { id: number } };

export type DeleteCharacteristicMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteCharacteristicMutation = { deleteCharacteristic: { id: number } };

export type DuplicateCharacteristicMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateCharacteristicMutation = { duplicateCharacteristic: { id: number } };

export type ToggleCharacteristicMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleCharacteristicMutation = { toggleCharacteristic: { id: number } };

export type UpdateCharacteristicMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: CharacteristicInput;
}>;


export type UpdateCharacteristicMutation = { updateCharacteristic: { id: number } };

export type CreateCollectionMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateCollectionMutation = { createCollection: { id: number } };

export type DeleteCollectionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteCollectionMutation = { deleteCollection: { id: number } };

export type DuplicateCollectionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateCollectionMutation = { duplicateCollection: { id: number } };

export type ToggleCollectionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleCollectionMutation = { toggleCollection: { id: number } };

export type UpdateCollectionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: CollectionInput;
}>;


export type UpdateCollectionMutation = { updateCollection: { id: number } };

export type CreateHolidayMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateHolidayMutation = { createHoliday: { id: number } };

export type DeleteHolidayMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteHolidayMutation = { deleteHoliday: { id: number } };

export type DuplicateHolidayMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateHolidayMutation = { duplicateHoliday: { id: number } };

export type ToggleHolidayMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleHolidayMutation = { toggleHoliday: { id: number } };

export type UpdateHolidayMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: HolidayInput;
}>;


export type UpdateHolidayMutation = { updateHoliday: { id: number } };

export type DeleteOrderMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteOrderMutation = { deleteOrder: { id: number } };

export type PlaceOrderMutationVariables = Exact<{
  data: PlaceOrderInput;
}>;


export type PlaceOrderMutation = { placeOrder: { id: number } };

export type UpdatePageMutationVariables = Exact<{
  type: PageType;
  data: PageInput;
}>;


export type UpdatePageMutation = { updatePage: boolean };

export type UpdateAboutMutationVariables = Exact<{
  data: AboutInput;
}>;


export type UpdateAboutMutation = { updateAbout: { name: string, content: string } };

export type UpdateForBuyersMutationVariables = Exact<{
  data: ForBuyersInput;
}>;


export type UpdateForBuyersMutation = { updateForBuyers: { name: string, content: string } };

export type UpdateShippingAndPaymentMutationVariables = Exact<{
  data: ShippingAndPaymentInput;
}>;


export type UpdateShippingAndPaymentMutation = { updateShippingAndPayment: { shippingName: string, shippingContent: string, paymentName: string, paymentContent: string } };

export type CreatePostMutationVariables = Exact<{ [key: string]: never; }>;


export type CreatePostMutation = { createPost: { id: number } };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeletePostMutation = { deletePost: { id: number } };

export type DuplicatePostMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicatePostMutation = { duplicatePost: { id: number } };

export type TogglePostMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type TogglePostMutation = { togglePost: { id: number } };

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: PostInput;
}>;


export type UpdatePostMutation = { updatePost: { id: number } };

export type CreateProductMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateProductMutation = { createProduct: { id: number } };

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteProductMutation = { deleteProduct: { id: number } };

export type DuplicateProductMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateProductMutation = { duplicateProduct: { id: number } };

export type ToggleProductMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleProductMutation = { toggleProduct: { id: number } };

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: ProductInput;
}>;


export type UpdateProductMutation = { updateProduct: { id: number } };

export type SendCallRequestMutationVariables = Exact<{
  data: CallRequestInput;
}>;


export type SendCallRequestMutation = { sendCallRequest: boolean };

export type CreateReviewMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateReviewMutation = { createReview: { id: number } };

export type DeleteReviewMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteReviewMutation = { deleteReview: { id: number } };

export type DuplicateReviewMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateReviewMutation = { duplicateReview: { id: number } };

export type ToggleReviewMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleReviewMutation = { toggleReview: { id: number } };

export type UpdateReviewMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: ReviewInput;
}>;


export type UpdateReviewMutation = { updateReview: { id: number } };

export type CreateRubricMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateRubricMutation = { createRubric: { id: number } };

export type DeleteRubricMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteRubricMutation = { deleteRubric: { id: number } };

export type DuplicateRubricMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateRubricMutation = { duplicateRubric: { id: number } };

export type ToggleRubricMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleRubricMutation = { toggleRubric: { id: number } };

export type UpdateRubricMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: RubricInput;
}>;


export type UpdateRubricMutation = { updateRubric: { id: number } };

export type CreateFolderMutationVariables = Exact<{
  data: CreateFolderInput;
}>;


export type CreateFolderMutation = { createFolder: string };

export type DeleteFileOrFolderMutationVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type DeleteFileOrFolderMutation = { deleteFileOrFolder: string };

export type EditFileOrFolderNameMutationVariables = Exact<{
  data: EditFileOrFolderNameInput;
}>;


export type EditFileOrFolderNameMutation = { editFileOrFolderName: string };

export type UploadFilesMutationVariables = Exact<{
  data: UploadFilesInput;
}>;


export type UploadFilesMutation = { uploadFiles: string };

export type CreateTagMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateTagMutation = { createTag: { id: number } };

export type DeleteTagMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteTagMutation = { deleteTag: { id: number } };

export type DuplicateTagMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateTagMutation = { duplicateTag: { id: number } };

export type ToggleTagMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleTagMutation = { toggleTag: { id: number } };

export type UpdateTagMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: TagInput;
}>;


export type UpdateTagMutation = { updateTag: { id: number } };

export type CreateTypeMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateTypeMutation = { createType: { id: number } };

export type DeleteTypeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteTypeMutation = { deleteType: { id: number } };

export type DuplicateTypeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateTypeMutation = { duplicateType: { id: number } };

export type ToggleTypeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleTypeMutation = { toggleType: { id: number } };

export type UpdateTypeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: TypeInput;
}>;


export type UpdateTypeMutation = { updateType: { id: number } };

export type CatalogQueryVariables = Exact<{
  data: CatalogInput;
}>;


export type CatalogQuery = { catalog: { productsCount: number, block?: { heading: string, content: string } | null, rootCategory?: { name: string, slug: string, parent?: { name: string, slug: string, parent?: { name: string, slug: string, parent?: { name: string, slug: string, parent?: { name: string, slug: string, parent?: { name: string, slug: string } | null } | null } | null } | null } | null, categories: Array<{ name: string, slug: string, categories: Array<{ name: string, slug: string, categories: Array<{ name: string, slug: string, categories: Array<{ name: string, slug: string, categories: Array<{ name: string, slug: string }> }> }> }> }> } | null, categories: Array<{ name: string, slug: string, imagePath?: string | null, parent?: { name: string, slug: string, parent?: { name: string, slug: string, parent?: { name: string, slug: string, parent?: { name: string, slug: string } | null } | null } | null } | null }>, filters: { sizes: Array<{ label: string, value: string, count: number }>, colors: Array<{ label: string, value: string, count: number }>, hues: Array<{ label: string, value: string, count: number }>, types: Array<{ iconPath: string, uncheckedIconPath?: string | null, value: string }>, manufacturers: Array<{ label: string, value: string, count: number }>, materials: Array<{ label: string, value: string, count: number }>, collections: Array<{ label: string, value: string, count: number }>, holidays: Array<{ label: string, value: string, count: number }>, countries: Array<{ label: string, value: string, count: number }>, price: { min: number, max: number } }, products: Array<{ id: number, name: string, slug: string, sku: string, iconPath?: string | null, description: string, packageQuantity: number, price: string, oldPrice?: string | null, views: number, boughtTimes: number, images: Array<string>, status: Status, createdAt: any, sizes: Array<{ size: string, price: string, oldPrice?: string | null }>, colors: Array<{ color: string, images: Array<string> }>, types: Array<{ iconPath: string }> }> } };

export type CategoriesQueryVariables = Exact<{
  query: QueryCategoryInput;
}>;


export type CategoriesQuery = { categories: { count: number, categories: Array<{ id: number, name: string, slug: string }> } };

export type CategoryByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CategoryByIdQuery = { categoryById: { name: string, imagePath?: string | null, parent?: { id: number, name: string } | null } };

export type CategorySeoQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CategorySeoQuery = { categorySeo?: { title: string, description: string } | null };

export type CharacteristicByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CharacteristicByIdQuery = { characteristicById: { name: string, type: CharacteristicType } };

export type CharacteristicsQueryVariables = Exact<{
  query: QueryInput;
}>;


export type CharacteristicsQuery = { characteristics: { count: number, characteristics: Array<{ id: number, name: string, slug: string, type: CharacteristicType }> } };

export type CollectionByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CollectionByIdQuery = { collectionById: { name: string } };

export type CollectionsQueryVariables = Exact<{
  query: QueryInput;
}>;


export type CollectionsQuery = { collections: { count: number, collections: Array<{ id: number, name: string, slug: string }> } };

export type HolidayByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type HolidayByIdQuery = { holidayById: { name: string } };

export type HolidaysQueryVariables = Exact<{
  query: QueryInput;
}>;


export type HolidaysQuery = { holidays: { count: number, holidays: Array<{ id: number, name: string, slug: string }> } };

export type OrderByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type OrderByIdQuery = { orderById: { id: number, name: string, phone: string, total: number, createdAt: any, items: Array<{ quantity: number, color?: string | null, size?: string | null, product: { id: number, name: string, slug: string, oldPrice?: string | null, price: string, images: Array<string> } }> } };

export type OrdersQueryVariables = Exact<{
  query: QueryInput;
}>;


export type OrdersQuery = { orders: { count: number, orders: Array<{ id: number, status: OrderStatus, total: number, name: string, phone: string, createdAt: any, items: Array<{ quantity: number }> }> } };

export type PageQueryVariables = Exact<{
  type: PageType;
}>;


export type PageQuery = { page: { blocks?: Array<{ heading: string, content: string }> | null, seo?: { title: string, description: string } | null } };

export type PageBlockQueryVariables = Exact<{
  type: BlockType;
}>;


export type PageBlockQuery = { pageBlock?: { heading: string, content: string } | null };

export type PageSeoQueryVariables = Exact<{
  type: PageType;
}>;


export type PageSeoQuery = { pageSeo?: { title: string, description: string } | null };

export type AboutQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutQuery = { about: { name: string, content: string } };

export type ForBuyersQueryVariables = Exact<{ [key: string]: never; }>;


export type ForBuyersQuery = { forBuyers: { name: string, content: string } };

export type ShippingAndPaymentQueryVariables = Exact<{ [key: string]: never; }>;


export type ShippingAndPaymentQuery = { shippingAndPayment: { shippingName: string, shippingContent: string, paymentName: string, paymentContent: string } };

export type PostByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type PostByIdQuery = { postById: { name: string, excerpt: string, description: string, poster: string, bigPoster: string, rubrics: Array<{ id: number, name: string }> } };

export type PostBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type PostBySlugQuery = { postBySlug: { name: string, excerpt: string, description: string, poster: string, bigPoster: string, createdAt: any, rubrics: Array<{ id: number, name: string }> } };

export type PostSeoQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type PostSeoQuery = { postSeo?: { title: string, description: string } | null };

export type PostsQueryVariables = Exact<{
  query: QueryInput;
}>;


export type PostsQuery = { posts: { count: number, posts: Array<{ id: number, name: string, slug: string, excerpt: string, description: string, poster: string, bigPoster: string, createdAt: any, rubrics: Array<{ name: string }> }> } };

export type ProductByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ProductByIdQuery = { productById: { name: string, sku: string, price: string, oldPrice?: string | null, packageQuantity: number, images: Array<string>, description: string, iconPath?: string | null, tags: Array<{ id: number, name: string }>, types: Array<{ id: number, name: string }>, holidays: Array<{ id: number, name: string }>, characteristics: Array<{ id: number, name: string }>, categories: Array<{ id: number, name: string }>, collections: Array<{ id: number, name: string }>, colors: Array<{ color: string, images: Array<string> }>, sizes: Array<{ size: string, price: string, oldPrice?: string | null }>, seo: { title: string, description: string } } };

export type ProductBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductBySlugQuery = { productBySlug: { product?: { id: number, name: string, slug: string, sku: string, iconPath?: string | null, description: string, packageQuantity: number, price: string, oldPrice?: string | null, views: number, boughtTimes: number, images: Array<string>, status: Status, createdAt: any, categories: Array<{ name: string, slug: string, imagePath?: string | null, parent?: { name: string, slug: string, parent?: { name: string, slug: string, parent?: { name: string, slug: string, parent?: { name: string, slug: string } | null } | null } | null } | null }>, sizes: Array<{ size: string, price: string, oldPrice?: string | null }>, colors: Array<{ color: string, images: Array<string> }>, types: Array<{ iconPath: string }>, characteristics: Array<{ name: string, type: CharacteristicType }> } | null, similarProducts: Array<{ id: number, name: string, slug: string, sku: string, iconPath?: string | null, description: string, packageQuantity: number, price: string, oldPrice?: string | null, views: number, boughtTimes: number, images: Array<string>, status: Status, createdAt: any, sizes: Array<{ size: string, price: string, oldPrice?: string | null }>, colors: Array<{ color: string, images: Array<string> }>, types: Array<{ iconPath: string }> }> } };

export type ProductSeoQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductSeoQuery = { productSeo?: { title: string, description: string } | null };

export type ProductsQueryVariables = Exact<{
  query: QueryProductInput;
  isPopular?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ProductsQuery = { products: { count: number, products: Array<{ id: number, name: string, slug: string, sku: string, iconPath?: string | null, description: string, packageQuantity: number, price: string, oldPrice?: string | null, views: number, boughtTimes: number, images: Array<string>, status: Status, createdAt: any, sizes: Array<{ size: string, price: string, oldPrice?: string | null }>, colors: Array<{ color: string, images: Array<string> }>, types: Array<{ iconPath: string }> }> } };

export type ReviewByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ReviewByIdQuery = { reviewById: { author: string, content: string, photo: string } };

export type ReviewsQueryVariables = Exact<{
  query: QueryInput;
}>;


export type ReviewsQuery = { reviews: { count: number, reviews: Array<{ id: number, author: string, content: string, photo: string }> } };

export type RubricByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type RubricByIdQuery = { rubricById: { name: string } };

export type RubricsQueryVariables = Exact<{
  query: QueryInput;
}>;


export type RubricsQuery = { rubrics: { count: number, rubrics: Array<{ id: number, name: string, slug: string }> } };

export type SitemapQueryVariables = Exact<{ [key: string]: never; }>;


export type SitemapQuery = { sitemap: { categoriesSlugs: Array<string>, productsSlugs: Array<string>, postsSlugs: Array<string> } };

export type GetFolderItemsQueryVariables = Exact<{
  folderPath: Scalars['String']['input'];
  query: PaginationInput;
}>;


export type GetFolderItemsQuery = { folderItems: { count: number, folders: Array<{ name: string, size: string, count: number, path: string, createdAt: any }>, files: Array<{ name: string, size: string, extension: string, path: string, createdAt: any }> } };

export type FoldersQueryVariables = Exact<{ [key: string]: never; }>;


export type FoldersQuery = { folders: Array<{ name: string, path: string, createdAt: any, childrens: Array<{ name: string, path: string, createdAt: any, childrens: Array<{ name: string, path: string, createdAt: any, childrens: Array<{ name: string, path: string, createdAt: any, childrens: Array<{ name: string, path: string, createdAt: any, childrens: Array<{ name: string, path: string, createdAt: any, childrens: Array<{ name: string, path: string, createdAt: any, childrens: Array<{ name: string, path: string, createdAt: any, childrens: Array<{ name: string, path: string, createdAt: any, childrens: Array<{ name: string, path: string, createdAt: any }> }> }> }> }> }> }> }> }> }> };

export type TagByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type TagByIdQuery = { tagById: { name: string, imagePath: string } };

export type TagsQueryVariables = Exact<{
  query: QueryInput;
}>;


export type TagsQuery = { tags: { count: number, tags: Array<{ id: number, name: string, slug: string, imagePath: string }> } };

export type TypeByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type TypeByIdQuery = { typeById: { name: string, iconPath: string, uncheckedIconPath?: string | null } };

export type TypesQueryVariables = Exact<{
  query: QueryInput;
}>;


export type TypesQuery = { types: { count: number, types: Array<{ id: number, name: string, iconPath: string }> } };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { profile: { user: { role: UserRole, profile: { login: string, email: string, avatarPath: string } } } };


export const LoginDocument = gql`
    mutation login($data: AuthLoginInput!) {
  login(data: $data) {
    user {
      profile {
        login
        email
        avatarPath
      }
      role
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation register($data: AuthRegisterInput!) {
  register(data: $data) {
    user {
      profile {
        login
        email
        avatarPath
      }
      role
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CreateCategoryDocument = gql`
    mutation CreateCategory {
  createCategory {
    id
  }
}
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($id: Int!) {
  deleteCategory(id: $id) {
    id
  }
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const DuplicateCategoryDocument = gql`
    mutation DuplicateCategory($id: Int!) {
  duplicateCategory(id: $id) {
    id
  }
}
    `;
export type DuplicateCategoryMutationFn = Apollo.MutationFunction<DuplicateCategoryMutation, DuplicateCategoryMutationVariables>;

/**
 * __useDuplicateCategoryMutation__
 *
 * To run a mutation, you first call `useDuplicateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateCategoryMutation, { data, loading, error }] = useDuplicateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateCategoryMutation, DuplicateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateCategoryMutation, DuplicateCategoryMutationVariables>(DuplicateCategoryDocument, options);
      }
export type DuplicateCategoryMutationHookResult = ReturnType<typeof useDuplicateCategoryMutation>;
export type DuplicateCategoryMutationResult = Apollo.MutationResult<DuplicateCategoryMutation>;
export type DuplicateCategoryMutationOptions = Apollo.BaseMutationOptions<DuplicateCategoryMutation, DuplicateCategoryMutationVariables>;
export const ToggleCategoryDocument = gql`
    mutation ToggleCategory($id: Int!) {
  toggleCategory(id: $id) {
    id
  }
}
    `;
export type ToggleCategoryMutationFn = Apollo.MutationFunction<ToggleCategoryMutation, ToggleCategoryMutationVariables>;

/**
 * __useToggleCategoryMutation__
 *
 * To run a mutation, you first call `useToggleCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleCategoryMutation, { data, loading, error }] = useToggleCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleCategoryMutation(baseOptions?: Apollo.MutationHookOptions<ToggleCategoryMutation, ToggleCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleCategoryMutation, ToggleCategoryMutationVariables>(ToggleCategoryDocument, options);
      }
export type ToggleCategoryMutationHookResult = ReturnType<typeof useToggleCategoryMutation>;
export type ToggleCategoryMutationResult = Apollo.MutationResult<ToggleCategoryMutation>;
export type ToggleCategoryMutationOptions = Apollo.BaseMutationOptions<ToggleCategoryMutation, ToggleCategoryMutationVariables>;
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($id: Int!, $data: CategoryInput!) {
  updateCategory(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const CreateCharacteristicDocument = gql`
    mutation CreateCharacteristic {
  createCharacteristic {
    id
  }
}
    `;
export type CreateCharacteristicMutationFn = Apollo.MutationFunction<CreateCharacteristicMutation, CreateCharacteristicMutationVariables>;

/**
 * __useCreateCharacteristicMutation__
 *
 * To run a mutation, you first call `useCreateCharacteristicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCharacteristicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCharacteristicMutation, { data, loading, error }] = useCreateCharacteristicMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateCharacteristicMutation(baseOptions?: Apollo.MutationHookOptions<CreateCharacteristicMutation, CreateCharacteristicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCharacteristicMutation, CreateCharacteristicMutationVariables>(CreateCharacteristicDocument, options);
      }
export type CreateCharacteristicMutationHookResult = ReturnType<typeof useCreateCharacteristicMutation>;
export type CreateCharacteristicMutationResult = Apollo.MutationResult<CreateCharacteristicMutation>;
export type CreateCharacteristicMutationOptions = Apollo.BaseMutationOptions<CreateCharacteristicMutation, CreateCharacteristicMutationVariables>;
export const DeleteCharacteristicDocument = gql`
    mutation DeleteCharacteristic($id: Int!) {
  deleteCharacteristic(id: $id) {
    id
  }
}
    `;
export type DeleteCharacteristicMutationFn = Apollo.MutationFunction<DeleteCharacteristicMutation, DeleteCharacteristicMutationVariables>;

/**
 * __useDeleteCharacteristicMutation__
 *
 * To run a mutation, you first call `useDeleteCharacteristicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCharacteristicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCharacteristicMutation, { data, loading, error }] = useDeleteCharacteristicMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCharacteristicMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCharacteristicMutation, DeleteCharacteristicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCharacteristicMutation, DeleteCharacteristicMutationVariables>(DeleteCharacteristicDocument, options);
      }
export type DeleteCharacteristicMutationHookResult = ReturnType<typeof useDeleteCharacteristicMutation>;
export type DeleteCharacteristicMutationResult = Apollo.MutationResult<DeleteCharacteristicMutation>;
export type DeleteCharacteristicMutationOptions = Apollo.BaseMutationOptions<DeleteCharacteristicMutation, DeleteCharacteristicMutationVariables>;
export const DuplicateCharacteristicDocument = gql`
    mutation DuplicateCharacteristic($id: Int!) {
  duplicateCharacteristic(id: $id) {
    id
  }
}
    `;
export type DuplicateCharacteristicMutationFn = Apollo.MutationFunction<DuplicateCharacteristicMutation, DuplicateCharacteristicMutationVariables>;

/**
 * __useDuplicateCharacteristicMutation__
 *
 * To run a mutation, you first call `useDuplicateCharacteristicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateCharacteristicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateCharacteristicMutation, { data, loading, error }] = useDuplicateCharacteristicMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateCharacteristicMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateCharacteristicMutation, DuplicateCharacteristicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateCharacteristicMutation, DuplicateCharacteristicMutationVariables>(DuplicateCharacteristicDocument, options);
      }
export type DuplicateCharacteristicMutationHookResult = ReturnType<typeof useDuplicateCharacteristicMutation>;
export type DuplicateCharacteristicMutationResult = Apollo.MutationResult<DuplicateCharacteristicMutation>;
export type DuplicateCharacteristicMutationOptions = Apollo.BaseMutationOptions<DuplicateCharacteristicMutation, DuplicateCharacteristicMutationVariables>;
export const ToggleCharacteristicDocument = gql`
    mutation ToggleCharacteristic($id: Int!) {
  toggleCharacteristic(id: $id) {
    id
  }
}
    `;
export type ToggleCharacteristicMutationFn = Apollo.MutationFunction<ToggleCharacteristicMutation, ToggleCharacteristicMutationVariables>;

/**
 * __useToggleCharacteristicMutation__
 *
 * To run a mutation, you first call `useToggleCharacteristicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleCharacteristicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleCharacteristicMutation, { data, loading, error }] = useToggleCharacteristicMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleCharacteristicMutation(baseOptions?: Apollo.MutationHookOptions<ToggleCharacteristicMutation, ToggleCharacteristicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleCharacteristicMutation, ToggleCharacteristicMutationVariables>(ToggleCharacteristicDocument, options);
      }
export type ToggleCharacteristicMutationHookResult = ReturnType<typeof useToggleCharacteristicMutation>;
export type ToggleCharacteristicMutationResult = Apollo.MutationResult<ToggleCharacteristicMutation>;
export type ToggleCharacteristicMutationOptions = Apollo.BaseMutationOptions<ToggleCharacteristicMutation, ToggleCharacteristicMutationVariables>;
export const UpdateCharacteristicDocument = gql`
    mutation UpdateCharacteristic($id: Int!, $data: CharacteristicInput!) {
  updateCharacteristic(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateCharacteristicMutationFn = Apollo.MutationFunction<UpdateCharacteristicMutation, UpdateCharacteristicMutationVariables>;

/**
 * __useUpdateCharacteristicMutation__
 *
 * To run a mutation, you first call `useUpdateCharacteristicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCharacteristicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCharacteristicMutation, { data, loading, error }] = useUpdateCharacteristicMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCharacteristicMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCharacteristicMutation, UpdateCharacteristicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCharacteristicMutation, UpdateCharacteristicMutationVariables>(UpdateCharacteristicDocument, options);
      }
export type UpdateCharacteristicMutationHookResult = ReturnType<typeof useUpdateCharacteristicMutation>;
export type UpdateCharacteristicMutationResult = Apollo.MutationResult<UpdateCharacteristicMutation>;
export type UpdateCharacteristicMutationOptions = Apollo.BaseMutationOptions<UpdateCharacteristicMutation, UpdateCharacteristicMutationVariables>;
export const CreateCollectionDocument = gql`
    mutation CreateCollection {
  createCollection {
    id
  }
}
    `;
export type CreateCollectionMutationFn = Apollo.MutationFunction<CreateCollectionMutation, CreateCollectionMutationVariables>;

/**
 * __useCreateCollectionMutation__
 *
 * To run a mutation, you first call `useCreateCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollectionMutation, { data, loading, error }] = useCreateCollectionMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateCollectionMutation(baseOptions?: Apollo.MutationHookOptions<CreateCollectionMutation, CreateCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCollectionMutation, CreateCollectionMutationVariables>(CreateCollectionDocument, options);
      }
export type CreateCollectionMutationHookResult = ReturnType<typeof useCreateCollectionMutation>;
export type CreateCollectionMutationResult = Apollo.MutationResult<CreateCollectionMutation>;
export type CreateCollectionMutationOptions = Apollo.BaseMutationOptions<CreateCollectionMutation, CreateCollectionMutationVariables>;
export const DeleteCollectionDocument = gql`
    mutation DeleteCollection($id: Int!) {
  deleteCollection(id: $id) {
    id
  }
}
    `;
export type DeleteCollectionMutationFn = Apollo.MutationFunction<DeleteCollectionMutation, DeleteCollectionMutationVariables>;

/**
 * __useDeleteCollectionMutation__
 *
 * To run a mutation, you first call `useDeleteCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCollectionMutation, { data, loading, error }] = useDeleteCollectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCollectionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCollectionMutation, DeleteCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCollectionMutation, DeleteCollectionMutationVariables>(DeleteCollectionDocument, options);
      }
export type DeleteCollectionMutationHookResult = ReturnType<typeof useDeleteCollectionMutation>;
export type DeleteCollectionMutationResult = Apollo.MutationResult<DeleteCollectionMutation>;
export type DeleteCollectionMutationOptions = Apollo.BaseMutationOptions<DeleteCollectionMutation, DeleteCollectionMutationVariables>;
export const DuplicateCollectionDocument = gql`
    mutation DuplicateCollection($id: Int!) {
  duplicateCollection(id: $id) {
    id
  }
}
    `;
export type DuplicateCollectionMutationFn = Apollo.MutationFunction<DuplicateCollectionMutation, DuplicateCollectionMutationVariables>;

/**
 * __useDuplicateCollectionMutation__
 *
 * To run a mutation, you first call `useDuplicateCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateCollectionMutation, { data, loading, error }] = useDuplicateCollectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateCollectionMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateCollectionMutation, DuplicateCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateCollectionMutation, DuplicateCollectionMutationVariables>(DuplicateCollectionDocument, options);
      }
export type DuplicateCollectionMutationHookResult = ReturnType<typeof useDuplicateCollectionMutation>;
export type DuplicateCollectionMutationResult = Apollo.MutationResult<DuplicateCollectionMutation>;
export type DuplicateCollectionMutationOptions = Apollo.BaseMutationOptions<DuplicateCollectionMutation, DuplicateCollectionMutationVariables>;
export const ToggleCollectionDocument = gql`
    mutation ToggleCollection($id: Int!) {
  toggleCollection(id: $id) {
    id
  }
}
    `;
export type ToggleCollectionMutationFn = Apollo.MutationFunction<ToggleCollectionMutation, ToggleCollectionMutationVariables>;

/**
 * __useToggleCollectionMutation__
 *
 * To run a mutation, you first call `useToggleCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleCollectionMutation, { data, loading, error }] = useToggleCollectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleCollectionMutation(baseOptions?: Apollo.MutationHookOptions<ToggleCollectionMutation, ToggleCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleCollectionMutation, ToggleCollectionMutationVariables>(ToggleCollectionDocument, options);
      }
export type ToggleCollectionMutationHookResult = ReturnType<typeof useToggleCollectionMutation>;
export type ToggleCollectionMutationResult = Apollo.MutationResult<ToggleCollectionMutation>;
export type ToggleCollectionMutationOptions = Apollo.BaseMutationOptions<ToggleCollectionMutation, ToggleCollectionMutationVariables>;
export const UpdateCollectionDocument = gql`
    mutation UpdateCollection($id: Int!, $data: CollectionInput!) {
  updateCollection(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateCollectionMutationFn = Apollo.MutationFunction<UpdateCollectionMutation, UpdateCollectionMutationVariables>;

/**
 * __useUpdateCollectionMutation__
 *
 * To run a mutation, you first call `useUpdateCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCollectionMutation, { data, loading, error }] = useUpdateCollectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCollectionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCollectionMutation, UpdateCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCollectionMutation, UpdateCollectionMutationVariables>(UpdateCollectionDocument, options);
      }
export type UpdateCollectionMutationHookResult = ReturnType<typeof useUpdateCollectionMutation>;
export type UpdateCollectionMutationResult = Apollo.MutationResult<UpdateCollectionMutation>;
export type UpdateCollectionMutationOptions = Apollo.BaseMutationOptions<UpdateCollectionMutation, UpdateCollectionMutationVariables>;
export const CreateHolidayDocument = gql`
    mutation CreateHoliday {
  createHoliday {
    id
  }
}
    `;
export type CreateHolidayMutationFn = Apollo.MutationFunction<CreateHolidayMutation, CreateHolidayMutationVariables>;

/**
 * __useCreateHolidayMutation__
 *
 * To run a mutation, you first call `useCreateHolidayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHolidayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHolidayMutation, { data, loading, error }] = useCreateHolidayMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateHolidayMutation(baseOptions?: Apollo.MutationHookOptions<CreateHolidayMutation, CreateHolidayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHolidayMutation, CreateHolidayMutationVariables>(CreateHolidayDocument, options);
      }
export type CreateHolidayMutationHookResult = ReturnType<typeof useCreateHolidayMutation>;
export type CreateHolidayMutationResult = Apollo.MutationResult<CreateHolidayMutation>;
export type CreateHolidayMutationOptions = Apollo.BaseMutationOptions<CreateHolidayMutation, CreateHolidayMutationVariables>;
export const DeleteHolidayDocument = gql`
    mutation DeleteHoliday($id: Int!) {
  deleteHoliday(id: $id) {
    id
  }
}
    `;
export type DeleteHolidayMutationFn = Apollo.MutationFunction<DeleteHolidayMutation, DeleteHolidayMutationVariables>;

/**
 * __useDeleteHolidayMutation__
 *
 * To run a mutation, you first call `useDeleteHolidayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHolidayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHolidayMutation, { data, loading, error }] = useDeleteHolidayMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteHolidayMutation(baseOptions?: Apollo.MutationHookOptions<DeleteHolidayMutation, DeleteHolidayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteHolidayMutation, DeleteHolidayMutationVariables>(DeleteHolidayDocument, options);
      }
export type DeleteHolidayMutationHookResult = ReturnType<typeof useDeleteHolidayMutation>;
export type DeleteHolidayMutationResult = Apollo.MutationResult<DeleteHolidayMutation>;
export type DeleteHolidayMutationOptions = Apollo.BaseMutationOptions<DeleteHolidayMutation, DeleteHolidayMutationVariables>;
export const DuplicateHolidayDocument = gql`
    mutation DuplicateHoliday($id: Int!) {
  duplicateHoliday(id: $id) {
    id
  }
}
    `;
export type DuplicateHolidayMutationFn = Apollo.MutationFunction<DuplicateHolidayMutation, DuplicateHolidayMutationVariables>;

/**
 * __useDuplicateHolidayMutation__
 *
 * To run a mutation, you first call `useDuplicateHolidayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateHolidayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateHolidayMutation, { data, loading, error }] = useDuplicateHolidayMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateHolidayMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateHolidayMutation, DuplicateHolidayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateHolidayMutation, DuplicateHolidayMutationVariables>(DuplicateHolidayDocument, options);
      }
export type DuplicateHolidayMutationHookResult = ReturnType<typeof useDuplicateHolidayMutation>;
export type DuplicateHolidayMutationResult = Apollo.MutationResult<DuplicateHolidayMutation>;
export type DuplicateHolidayMutationOptions = Apollo.BaseMutationOptions<DuplicateHolidayMutation, DuplicateHolidayMutationVariables>;
export const ToggleHolidayDocument = gql`
    mutation ToggleHoliday($id: Int!) {
  toggleHoliday(id: $id) {
    id
  }
}
    `;
export type ToggleHolidayMutationFn = Apollo.MutationFunction<ToggleHolidayMutation, ToggleHolidayMutationVariables>;

/**
 * __useToggleHolidayMutation__
 *
 * To run a mutation, you first call `useToggleHolidayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleHolidayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleHolidayMutation, { data, loading, error }] = useToggleHolidayMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleHolidayMutation(baseOptions?: Apollo.MutationHookOptions<ToggleHolidayMutation, ToggleHolidayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleHolidayMutation, ToggleHolidayMutationVariables>(ToggleHolidayDocument, options);
      }
export type ToggleHolidayMutationHookResult = ReturnType<typeof useToggleHolidayMutation>;
export type ToggleHolidayMutationResult = Apollo.MutationResult<ToggleHolidayMutation>;
export type ToggleHolidayMutationOptions = Apollo.BaseMutationOptions<ToggleHolidayMutation, ToggleHolidayMutationVariables>;
export const UpdateHolidayDocument = gql`
    mutation UpdateHoliday($id: Int!, $data: HolidayInput!) {
  updateHoliday(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateHolidayMutationFn = Apollo.MutationFunction<UpdateHolidayMutation, UpdateHolidayMutationVariables>;

/**
 * __useUpdateHolidayMutation__
 *
 * To run a mutation, you first call `useUpdateHolidayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHolidayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHolidayMutation, { data, loading, error }] = useUpdateHolidayMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateHolidayMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHolidayMutation, UpdateHolidayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHolidayMutation, UpdateHolidayMutationVariables>(UpdateHolidayDocument, options);
      }
export type UpdateHolidayMutationHookResult = ReturnType<typeof useUpdateHolidayMutation>;
export type UpdateHolidayMutationResult = Apollo.MutationResult<UpdateHolidayMutation>;
export type UpdateHolidayMutationOptions = Apollo.BaseMutationOptions<UpdateHolidayMutation, UpdateHolidayMutationVariables>;
export const DeleteOrderDocument = gql`
    mutation DeleteOrder($id: Int!) {
  deleteOrder(id: $id) {
    id
  }
}
    `;
export type DeleteOrderMutationFn = Apollo.MutationFunction<DeleteOrderMutation, DeleteOrderMutationVariables>;

/**
 * __useDeleteOrderMutation__
 *
 * To run a mutation, you first call `useDeleteOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrderMutation, { data, loading, error }] = useDeleteOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOrderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOrderMutation, DeleteOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOrderMutation, DeleteOrderMutationVariables>(DeleteOrderDocument, options);
      }
export type DeleteOrderMutationHookResult = ReturnType<typeof useDeleteOrderMutation>;
export type DeleteOrderMutationResult = Apollo.MutationResult<DeleteOrderMutation>;
export type DeleteOrderMutationOptions = Apollo.BaseMutationOptions<DeleteOrderMutation, DeleteOrderMutationVariables>;
export const PlaceOrderDocument = gql`
    mutation PlaceOrder($data: PlaceOrderInput!) {
  placeOrder(data: $data) {
    id
  }
}
    `;
export type PlaceOrderMutationFn = Apollo.MutationFunction<PlaceOrderMutation, PlaceOrderMutationVariables>;

/**
 * __usePlaceOrderMutation__
 *
 * To run a mutation, you first call `usePlaceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlaceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [placeOrderMutation, { data, loading, error }] = usePlaceOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function usePlaceOrderMutation(baseOptions?: Apollo.MutationHookOptions<PlaceOrderMutation, PlaceOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PlaceOrderMutation, PlaceOrderMutationVariables>(PlaceOrderDocument, options);
      }
export type PlaceOrderMutationHookResult = ReturnType<typeof usePlaceOrderMutation>;
export type PlaceOrderMutationResult = Apollo.MutationResult<PlaceOrderMutation>;
export type PlaceOrderMutationOptions = Apollo.BaseMutationOptions<PlaceOrderMutation, PlaceOrderMutationVariables>;
export const UpdatePageDocument = gql`
    mutation UpdatePage($type: PageType!, $data: PageInput!) {
  updatePage(type: $type, data: $data)
}
    `;
export type UpdatePageMutationFn = Apollo.MutationFunction<UpdatePageMutation, UpdatePageMutationVariables>;

/**
 * __useUpdatePageMutation__
 *
 * To run a mutation, you first call `useUpdatePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePageMutation, { data, loading, error }] = useUpdatePageMutation({
 *   variables: {
 *      type: // value for 'type'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePageMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePageMutation, UpdatePageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePageMutation, UpdatePageMutationVariables>(UpdatePageDocument, options);
      }
export type UpdatePageMutationHookResult = ReturnType<typeof useUpdatePageMutation>;
export type UpdatePageMutationResult = Apollo.MutationResult<UpdatePageMutation>;
export type UpdatePageMutationOptions = Apollo.BaseMutationOptions<UpdatePageMutation, UpdatePageMutationVariables>;
export const UpdateAboutDocument = gql`
    mutation UpdateAbout($data: AboutInput!) {
  updateAbout(data: $data) {
    name
    content
  }
}
    `;
export type UpdateAboutMutationFn = Apollo.MutationFunction<UpdateAboutMutation, UpdateAboutMutationVariables>;

/**
 * __useUpdateAboutMutation__
 *
 * To run a mutation, you first call `useUpdateAboutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAboutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAboutMutation, { data, loading, error }] = useUpdateAboutMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAboutMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAboutMutation, UpdateAboutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAboutMutation, UpdateAboutMutationVariables>(UpdateAboutDocument, options);
      }
export type UpdateAboutMutationHookResult = ReturnType<typeof useUpdateAboutMutation>;
export type UpdateAboutMutationResult = Apollo.MutationResult<UpdateAboutMutation>;
export type UpdateAboutMutationOptions = Apollo.BaseMutationOptions<UpdateAboutMutation, UpdateAboutMutationVariables>;
export const UpdateForBuyersDocument = gql`
    mutation UpdateForBuyers($data: ForBuyersInput!) {
  updateForBuyers(data: $data) {
    name
    content
  }
}
    `;
export type UpdateForBuyersMutationFn = Apollo.MutationFunction<UpdateForBuyersMutation, UpdateForBuyersMutationVariables>;

/**
 * __useUpdateForBuyersMutation__
 *
 * To run a mutation, you first call `useUpdateForBuyersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateForBuyersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateForBuyersMutation, { data, loading, error }] = useUpdateForBuyersMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateForBuyersMutation(baseOptions?: Apollo.MutationHookOptions<UpdateForBuyersMutation, UpdateForBuyersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateForBuyersMutation, UpdateForBuyersMutationVariables>(UpdateForBuyersDocument, options);
      }
export type UpdateForBuyersMutationHookResult = ReturnType<typeof useUpdateForBuyersMutation>;
export type UpdateForBuyersMutationResult = Apollo.MutationResult<UpdateForBuyersMutation>;
export type UpdateForBuyersMutationOptions = Apollo.BaseMutationOptions<UpdateForBuyersMutation, UpdateForBuyersMutationVariables>;
export const UpdateShippingAndPaymentDocument = gql`
    mutation UpdateShippingAndPayment($data: ShippingAndPaymentInput!) {
  updateShippingAndPayment(data: $data) {
    shippingName
    shippingContent
    paymentName
    paymentContent
  }
}
    `;
export type UpdateShippingAndPaymentMutationFn = Apollo.MutationFunction<UpdateShippingAndPaymentMutation, UpdateShippingAndPaymentMutationVariables>;

/**
 * __useUpdateShippingAndPaymentMutation__
 *
 * To run a mutation, you first call `useUpdateShippingAndPaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShippingAndPaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShippingAndPaymentMutation, { data, loading, error }] = useUpdateShippingAndPaymentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateShippingAndPaymentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateShippingAndPaymentMutation, UpdateShippingAndPaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateShippingAndPaymentMutation, UpdateShippingAndPaymentMutationVariables>(UpdateShippingAndPaymentDocument, options);
      }
export type UpdateShippingAndPaymentMutationHookResult = ReturnType<typeof useUpdateShippingAndPaymentMutation>;
export type UpdateShippingAndPaymentMutationResult = Apollo.MutationResult<UpdateShippingAndPaymentMutation>;
export type UpdateShippingAndPaymentMutationOptions = Apollo.BaseMutationOptions<UpdateShippingAndPaymentMutation, UpdateShippingAndPaymentMutationVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost {
  createPost {
    id
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const DeletePostDocument = gql`
    mutation DeletePost($id: Int!) {
  deletePost(id: $id) {
    id
  }
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const DuplicatePostDocument = gql`
    mutation DuplicatePost($id: Int!) {
  duplicatePost(id: $id) {
    id
  }
}
    `;
export type DuplicatePostMutationFn = Apollo.MutationFunction<DuplicatePostMutation, DuplicatePostMutationVariables>;

/**
 * __useDuplicatePostMutation__
 *
 * To run a mutation, you first call `useDuplicatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicatePostMutation, { data, loading, error }] = useDuplicatePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicatePostMutation(baseOptions?: Apollo.MutationHookOptions<DuplicatePostMutation, DuplicatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicatePostMutation, DuplicatePostMutationVariables>(DuplicatePostDocument, options);
      }
export type DuplicatePostMutationHookResult = ReturnType<typeof useDuplicatePostMutation>;
export type DuplicatePostMutationResult = Apollo.MutationResult<DuplicatePostMutation>;
export type DuplicatePostMutationOptions = Apollo.BaseMutationOptions<DuplicatePostMutation, DuplicatePostMutationVariables>;
export const TogglePostDocument = gql`
    mutation TogglePost($id: Int!) {
  togglePost(id: $id) {
    id
  }
}
    `;
export type TogglePostMutationFn = Apollo.MutationFunction<TogglePostMutation, TogglePostMutationVariables>;

/**
 * __useTogglePostMutation__
 *
 * To run a mutation, you first call `useTogglePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTogglePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [togglePostMutation, { data, loading, error }] = useTogglePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTogglePostMutation(baseOptions?: Apollo.MutationHookOptions<TogglePostMutation, TogglePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TogglePostMutation, TogglePostMutationVariables>(TogglePostDocument, options);
      }
export type TogglePostMutationHookResult = ReturnType<typeof useTogglePostMutation>;
export type TogglePostMutationResult = Apollo.MutationResult<TogglePostMutation>;
export type TogglePostMutationOptions = Apollo.BaseMutationOptions<TogglePostMutation, TogglePostMutationVariables>;
export const UpdatePostDocument = gql`
    mutation UpdatePost($id: Int!, $data: PostInput!) {
  updatePost(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, options);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct {
  createProduct {
    id
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($id: Int!) {
  deleteProduct(id: $id) {
    id
  }
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const DuplicateProductDocument = gql`
    mutation DuplicateProduct($id: Int!) {
  duplicateProduct(id: $id) {
    id
  }
}
    `;
export type DuplicateProductMutationFn = Apollo.MutationFunction<DuplicateProductMutation, DuplicateProductMutationVariables>;

/**
 * __useDuplicateProductMutation__
 *
 * To run a mutation, you first call `useDuplicateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateProductMutation, { data, loading, error }] = useDuplicateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateProductMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateProductMutation, DuplicateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateProductMutation, DuplicateProductMutationVariables>(DuplicateProductDocument, options);
      }
export type DuplicateProductMutationHookResult = ReturnType<typeof useDuplicateProductMutation>;
export type DuplicateProductMutationResult = Apollo.MutationResult<DuplicateProductMutation>;
export type DuplicateProductMutationOptions = Apollo.BaseMutationOptions<DuplicateProductMutation, DuplicateProductMutationVariables>;
export const ToggleProductDocument = gql`
    mutation ToggleProduct($id: Int!) {
  toggleProduct(id: $id) {
    id
  }
}
    `;
export type ToggleProductMutationFn = Apollo.MutationFunction<ToggleProductMutation, ToggleProductMutationVariables>;

/**
 * __useToggleProductMutation__
 *
 * To run a mutation, you first call `useToggleProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleProductMutation, { data, loading, error }] = useToggleProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleProductMutation(baseOptions?: Apollo.MutationHookOptions<ToggleProductMutation, ToggleProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleProductMutation, ToggleProductMutationVariables>(ToggleProductDocument, options);
      }
export type ToggleProductMutationHookResult = ReturnType<typeof useToggleProductMutation>;
export type ToggleProductMutationResult = Apollo.MutationResult<ToggleProductMutation>;
export type ToggleProductMutationOptions = Apollo.BaseMutationOptions<ToggleProductMutation, ToggleProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($id: Int!, $data: ProductInput!) {
  updateProduct(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const SendCallRequestDocument = gql`
    mutation SendCallRequest($data: CallRequestInput!) {
  sendCallRequest(data: $data)
}
    `;
export type SendCallRequestMutationFn = Apollo.MutationFunction<SendCallRequestMutation, SendCallRequestMutationVariables>;

/**
 * __useSendCallRequestMutation__
 *
 * To run a mutation, you first call `useSendCallRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendCallRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendCallRequestMutation, { data, loading, error }] = useSendCallRequestMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSendCallRequestMutation(baseOptions?: Apollo.MutationHookOptions<SendCallRequestMutation, SendCallRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendCallRequestMutation, SendCallRequestMutationVariables>(SendCallRequestDocument, options);
      }
export type SendCallRequestMutationHookResult = ReturnType<typeof useSendCallRequestMutation>;
export type SendCallRequestMutationResult = Apollo.MutationResult<SendCallRequestMutation>;
export type SendCallRequestMutationOptions = Apollo.BaseMutationOptions<SendCallRequestMutation, SendCallRequestMutationVariables>;
export const CreateReviewDocument = gql`
    mutation CreateReview {
  createReview {
    id
  }
}
    `;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, options);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
export const DeleteReviewDocument = gql`
    mutation DeleteReview($id: Int!) {
  deleteReview(id: $id) {
    id
  }
}
    `;
export type DeleteReviewMutationFn = Apollo.MutationFunction<DeleteReviewMutation, DeleteReviewMutationVariables>;

/**
 * __useDeleteReviewMutation__
 *
 * To run a mutation, you first call `useDeleteReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReviewMutation, { data, loading, error }] = useDeleteReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteReviewMutation(baseOptions?: Apollo.MutationHookOptions<DeleteReviewMutation, DeleteReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteReviewMutation, DeleteReviewMutationVariables>(DeleteReviewDocument, options);
      }
export type DeleteReviewMutationHookResult = ReturnType<typeof useDeleteReviewMutation>;
export type DeleteReviewMutationResult = Apollo.MutationResult<DeleteReviewMutation>;
export type DeleteReviewMutationOptions = Apollo.BaseMutationOptions<DeleteReviewMutation, DeleteReviewMutationVariables>;
export const DuplicateReviewDocument = gql`
    mutation DuplicateReview($id: Int!) {
  duplicateReview(id: $id) {
    id
  }
}
    `;
export type DuplicateReviewMutationFn = Apollo.MutationFunction<DuplicateReviewMutation, DuplicateReviewMutationVariables>;

/**
 * __useDuplicateReviewMutation__
 *
 * To run a mutation, you first call `useDuplicateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateReviewMutation, { data, loading, error }] = useDuplicateReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateReviewMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateReviewMutation, DuplicateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateReviewMutation, DuplicateReviewMutationVariables>(DuplicateReviewDocument, options);
      }
export type DuplicateReviewMutationHookResult = ReturnType<typeof useDuplicateReviewMutation>;
export type DuplicateReviewMutationResult = Apollo.MutationResult<DuplicateReviewMutation>;
export type DuplicateReviewMutationOptions = Apollo.BaseMutationOptions<DuplicateReviewMutation, DuplicateReviewMutationVariables>;
export const ToggleReviewDocument = gql`
    mutation ToggleReview($id: Int!) {
  toggleReview(id: $id) {
    id
  }
}
    `;
export type ToggleReviewMutationFn = Apollo.MutationFunction<ToggleReviewMutation, ToggleReviewMutationVariables>;

/**
 * __useToggleReviewMutation__
 *
 * To run a mutation, you first call `useToggleReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleReviewMutation, { data, loading, error }] = useToggleReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleReviewMutation(baseOptions?: Apollo.MutationHookOptions<ToggleReviewMutation, ToggleReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleReviewMutation, ToggleReviewMutationVariables>(ToggleReviewDocument, options);
      }
export type ToggleReviewMutationHookResult = ReturnType<typeof useToggleReviewMutation>;
export type ToggleReviewMutationResult = Apollo.MutationResult<ToggleReviewMutation>;
export type ToggleReviewMutationOptions = Apollo.BaseMutationOptions<ToggleReviewMutation, ToggleReviewMutationVariables>;
export const UpdateReviewDocument = gql`
    mutation UpdateReview($id: Int!, $data: ReviewInput!) {
  updateReview(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateReviewMutationFn = Apollo.MutationFunction<UpdateReviewMutation, UpdateReviewMutationVariables>;

/**
 * __useUpdateReviewMutation__
 *
 * To run a mutation, you first call `useUpdateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReviewMutation, { data, loading, error }] = useUpdateReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateReviewMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReviewMutation, UpdateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReviewMutation, UpdateReviewMutationVariables>(UpdateReviewDocument, options);
      }
export type UpdateReviewMutationHookResult = ReturnType<typeof useUpdateReviewMutation>;
export type UpdateReviewMutationResult = Apollo.MutationResult<UpdateReviewMutation>;
export type UpdateReviewMutationOptions = Apollo.BaseMutationOptions<UpdateReviewMutation, UpdateReviewMutationVariables>;
export const CreateRubricDocument = gql`
    mutation CreateRubric {
  createRubric {
    id
  }
}
    `;
export type CreateRubricMutationFn = Apollo.MutationFunction<CreateRubricMutation, CreateRubricMutationVariables>;

/**
 * __useCreateRubricMutation__
 *
 * To run a mutation, you first call `useCreateRubricMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRubricMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRubricMutation, { data, loading, error }] = useCreateRubricMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateRubricMutation(baseOptions?: Apollo.MutationHookOptions<CreateRubricMutation, CreateRubricMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRubricMutation, CreateRubricMutationVariables>(CreateRubricDocument, options);
      }
export type CreateRubricMutationHookResult = ReturnType<typeof useCreateRubricMutation>;
export type CreateRubricMutationResult = Apollo.MutationResult<CreateRubricMutation>;
export type CreateRubricMutationOptions = Apollo.BaseMutationOptions<CreateRubricMutation, CreateRubricMutationVariables>;
export const DeleteRubricDocument = gql`
    mutation DeleteRubric($id: Int!) {
  deleteRubric(id: $id) {
    id
  }
}
    `;
export type DeleteRubricMutationFn = Apollo.MutationFunction<DeleteRubricMutation, DeleteRubricMutationVariables>;

/**
 * __useDeleteRubricMutation__
 *
 * To run a mutation, you first call `useDeleteRubricMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRubricMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRubricMutation, { data, loading, error }] = useDeleteRubricMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRubricMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRubricMutation, DeleteRubricMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRubricMutation, DeleteRubricMutationVariables>(DeleteRubricDocument, options);
      }
export type DeleteRubricMutationHookResult = ReturnType<typeof useDeleteRubricMutation>;
export type DeleteRubricMutationResult = Apollo.MutationResult<DeleteRubricMutation>;
export type DeleteRubricMutationOptions = Apollo.BaseMutationOptions<DeleteRubricMutation, DeleteRubricMutationVariables>;
export const DuplicateRubricDocument = gql`
    mutation DuplicateRubric($id: Int!) {
  duplicateRubric(id: $id) {
    id
  }
}
    `;
export type DuplicateRubricMutationFn = Apollo.MutationFunction<DuplicateRubricMutation, DuplicateRubricMutationVariables>;

/**
 * __useDuplicateRubricMutation__
 *
 * To run a mutation, you first call `useDuplicateRubricMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateRubricMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateRubricMutation, { data, loading, error }] = useDuplicateRubricMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateRubricMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateRubricMutation, DuplicateRubricMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateRubricMutation, DuplicateRubricMutationVariables>(DuplicateRubricDocument, options);
      }
export type DuplicateRubricMutationHookResult = ReturnType<typeof useDuplicateRubricMutation>;
export type DuplicateRubricMutationResult = Apollo.MutationResult<DuplicateRubricMutation>;
export type DuplicateRubricMutationOptions = Apollo.BaseMutationOptions<DuplicateRubricMutation, DuplicateRubricMutationVariables>;
export const ToggleRubricDocument = gql`
    mutation ToggleRubric($id: Int!) {
  toggleRubric(id: $id) {
    id
  }
}
    `;
export type ToggleRubricMutationFn = Apollo.MutationFunction<ToggleRubricMutation, ToggleRubricMutationVariables>;

/**
 * __useToggleRubricMutation__
 *
 * To run a mutation, you first call `useToggleRubricMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleRubricMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleRubricMutation, { data, loading, error }] = useToggleRubricMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleRubricMutation(baseOptions?: Apollo.MutationHookOptions<ToggleRubricMutation, ToggleRubricMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleRubricMutation, ToggleRubricMutationVariables>(ToggleRubricDocument, options);
      }
export type ToggleRubricMutationHookResult = ReturnType<typeof useToggleRubricMutation>;
export type ToggleRubricMutationResult = Apollo.MutationResult<ToggleRubricMutation>;
export type ToggleRubricMutationOptions = Apollo.BaseMutationOptions<ToggleRubricMutation, ToggleRubricMutationVariables>;
export const UpdateRubricDocument = gql`
    mutation UpdateRubric($id: Int!, $data: RubricInput!) {
  updateRubric(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateRubricMutationFn = Apollo.MutationFunction<UpdateRubricMutation, UpdateRubricMutationVariables>;

/**
 * __useUpdateRubricMutation__
 *
 * To run a mutation, you first call `useUpdateRubricMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRubricMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRubricMutation, { data, loading, error }] = useUpdateRubricMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateRubricMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRubricMutation, UpdateRubricMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRubricMutation, UpdateRubricMutationVariables>(UpdateRubricDocument, options);
      }
export type UpdateRubricMutationHookResult = ReturnType<typeof useUpdateRubricMutation>;
export type UpdateRubricMutationResult = Apollo.MutationResult<UpdateRubricMutation>;
export type UpdateRubricMutationOptions = Apollo.BaseMutationOptions<UpdateRubricMutation, UpdateRubricMutationVariables>;
export const CreateFolderDocument = gql`
    mutation CreateFolder($data: CreateFolderInput!) {
  createFolder(data: $data)
}
    `;
export type CreateFolderMutationFn = Apollo.MutationFunction<CreateFolderMutation, CreateFolderMutationVariables>;

/**
 * __useCreateFolderMutation__
 *
 * To run a mutation, you first call `useCreateFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFolderMutation, { data, loading, error }] = useCreateFolderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateFolderMutation(baseOptions?: Apollo.MutationHookOptions<CreateFolderMutation, CreateFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFolderMutation, CreateFolderMutationVariables>(CreateFolderDocument, options);
      }
export type CreateFolderMutationHookResult = ReturnType<typeof useCreateFolderMutation>;
export type CreateFolderMutationResult = Apollo.MutationResult<CreateFolderMutation>;
export type CreateFolderMutationOptions = Apollo.BaseMutationOptions<CreateFolderMutation, CreateFolderMutationVariables>;
export const DeleteFileOrFolderDocument = gql`
    mutation DeleteFileOrFolder($path: String!) {
  deleteFileOrFolder(path: $path)
}
    `;
export type DeleteFileOrFolderMutationFn = Apollo.MutationFunction<DeleteFileOrFolderMutation, DeleteFileOrFolderMutationVariables>;

/**
 * __useDeleteFileOrFolderMutation__
 *
 * To run a mutation, you first call `useDeleteFileOrFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFileOrFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFileOrFolderMutation, { data, loading, error }] = useDeleteFileOrFolderMutation({
 *   variables: {
 *      path: // value for 'path'
 *   },
 * });
 */
export function useDeleteFileOrFolderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFileOrFolderMutation, DeleteFileOrFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFileOrFolderMutation, DeleteFileOrFolderMutationVariables>(DeleteFileOrFolderDocument, options);
      }
export type DeleteFileOrFolderMutationHookResult = ReturnType<typeof useDeleteFileOrFolderMutation>;
export type DeleteFileOrFolderMutationResult = Apollo.MutationResult<DeleteFileOrFolderMutation>;
export type DeleteFileOrFolderMutationOptions = Apollo.BaseMutationOptions<DeleteFileOrFolderMutation, DeleteFileOrFolderMutationVariables>;
export const EditFileOrFolderNameDocument = gql`
    mutation EditFileOrFolderName($data: EditFileOrFolderNameInput!) {
  editFileOrFolderName(data: $data)
}
    `;
export type EditFileOrFolderNameMutationFn = Apollo.MutationFunction<EditFileOrFolderNameMutation, EditFileOrFolderNameMutationVariables>;

/**
 * __useEditFileOrFolderNameMutation__
 *
 * To run a mutation, you first call `useEditFileOrFolderNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditFileOrFolderNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editFileOrFolderNameMutation, { data, loading, error }] = useEditFileOrFolderNameMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditFileOrFolderNameMutation(baseOptions?: Apollo.MutationHookOptions<EditFileOrFolderNameMutation, EditFileOrFolderNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditFileOrFolderNameMutation, EditFileOrFolderNameMutationVariables>(EditFileOrFolderNameDocument, options);
      }
export type EditFileOrFolderNameMutationHookResult = ReturnType<typeof useEditFileOrFolderNameMutation>;
export type EditFileOrFolderNameMutationResult = Apollo.MutationResult<EditFileOrFolderNameMutation>;
export type EditFileOrFolderNameMutationOptions = Apollo.BaseMutationOptions<EditFileOrFolderNameMutation, EditFileOrFolderNameMutationVariables>;
export const UploadFilesDocument = gql`
    mutation UploadFiles($data: UploadFilesInput!) {
  uploadFiles(data: $data)
}
    `;
export type UploadFilesMutationFn = Apollo.MutationFunction<UploadFilesMutation, UploadFilesMutationVariables>;

/**
 * __useUploadFilesMutation__
 *
 * To run a mutation, you first call `useUploadFilesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFilesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFilesMutation, { data, loading, error }] = useUploadFilesMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUploadFilesMutation(baseOptions?: Apollo.MutationHookOptions<UploadFilesMutation, UploadFilesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadFilesMutation, UploadFilesMutationVariables>(UploadFilesDocument, options);
      }
export type UploadFilesMutationHookResult = ReturnType<typeof useUploadFilesMutation>;
export type UploadFilesMutationResult = Apollo.MutationResult<UploadFilesMutation>;
export type UploadFilesMutationOptions = Apollo.BaseMutationOptions<UploadFilesMutation, UploadFilesMutationVariables>;
export const CreateTagDocument = gql`
    mutation CreateTag {
  createTag {
    id
  }
}
    `;
export type CreateTagMutationFn = Apollo.MutationFunction<CreateTagMutation, CreateTagMutationVariables>;

/**
 * __useCreateTagMutation__
 *
 * To run a mutation, you first call `useCreateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTagMutation, { data, loading, error }] = useCreateTagMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateTagMutation(baseOptions?: Apollo.MutationHookOptions<CreateTagMutation, CreateTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTagMutation, CreateTagMutationVariables>(CreateTagDocument, options);
      }
export type CreateTagMutationHookResult = ReturnType<typeof useCreateTagMutation>;
export type CreateTagMutationResult = Apollo.MutationResult<CreateTagMutation>;
export type CreateTagMutationOptions = Apollo.BaseMutationOptions<CreateTagMutation, CreateTagMutationVariables>;
export const DeleteTagDocument = gql`
    mutation DeleteTag($id: Int!) {
  deleteTag(id: $id) {
    id
  }
}
    `;
export type DeleteTagMutationFn = Apollo.MutationFunction<DeleteTagMutation, DeleteTagMutationVariables>;

/**
 * __useDeleteTagMutation__
 *
 * To run a mutation, you first call `useDeleteTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTagMutation, { data, loading, error }] = useDeleteTagMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTagMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTagMutation, DeleteTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTagMutation, DeleteTagMutationVariables>(DeleteTagDocument, options);
      }
export type DeleteTagMutationHookResult = ReturnType<typeof useDeleteTagMutation>;
export type DeleteTagMutationResult = Apollo.MutationResult<DeleteTagMutation>;
export type DeleteTagMutationOptions = Apollo.BaseMutationOptions<DeleteTagMutation, DeleteTagMutationVariables>;
export const DuplicateTagDocument = gql`
    mutation DuplicateTag($id: Int!) {
  duplicateTag(id: $id) {
    id
  }
}
    `;
export type DuplicateTagMutationFn = Apollo.MutationFunction<DuplicateTagMutation, DuplicateTagMutationVariables>;

/**
 * __useDuplicateTagMutation__
 *
 * To run a mutation, you first call `useDuplicateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateTagMutation, { data, loading, error }] = useDuplicateTagMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateTagMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateTagMutation, DuplicateTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateTagMutation, DuplicateTagMutationVariables>(DuplicateTagDocument, options);
      }
export type DuplicateTagMutationHookResult = ReturnType<typeof useDuplicateTagMutation>;
export type DuplicateTagMutationResult = Apollo.MutationResult<DuplicateTagMutation>;
export type DuplicateTagMutationOptions = Apollo.BaseMutationOptions<DuplicateTagMutation, DuplicateTagMutationVariables>;
export const ToggleTagDocument = gql`
    mutation ToggleTag($id: Int!) {
  toggleTag(id: $id) {
    id
  }
}
    `;
export type ToggleTagMutationFn = Apollo.MutationFunction<ToggleTagMutation, ToggleTagMutationVariables>;

/**
 * __useToggleTagMutation__
 *
 * To run a mutation, you first call `useToggleTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleTagMutation, { data, loading, error }] = useToggleTagMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleTagMutation(baseOptions?: Apollo.MutationHookOptions<ToggleTagMutation, ToggleTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleTagMutation, ToggleTagMutationVariables>(ToggleTagDocument, options);
      }
export type ToggleTagMutationHookResult = ReturnType<typeof useToggleTagMutation>;
export type ToggleTagMutationResult = Apollo.MutationResult<ToggleTagMutation>;
export type ToggleTagMutationOptions = Apollo.BaseMutationOptions<ToggleTagMutation, ToggleTagMutationVariables>;
export const UpdateTagDocument = gql`
    mutation UpdateTag($id: Int!, $data: TagInput!) {
  updateTag(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateTagMutationFn = Apollo.MutationFunction<UpdateTagMutation, UpdateTagMutationVariables>;

/**
 * __useUpdateTagMutation__
 *
 * To run a mutation, you first call `useUpdateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTagMutation, { data, loading, error }] = useUpdateTagMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTagMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTagMutation, UpdateTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTagMutation, UpdateTagMutationVariables>(UpdateTagDocument, options);
      }
export type UpdateTagMutationHookResult = ReturnType<typeof useUpdateTagMutation>;
export type UpdateTagMutationResult = Apollo.MutationResult<UpdateTagMutation>;
export type UpdateTagMutationOptions = Apollo.BaseMutationOptions<UpdateTagMutation, UpdateTagMutationVariables>;
export const CreateTypeDocument = gql`
    mutation CreateType {
  createType {
    id
  }
}
    `;
export type CreateTypeMutationFn = Apollo.MutationFunction<CreateTypeMutation, CreateTypeMutationVariables>;

/**
 * __useCreateTypeMutation__
 *
 * To run a mutation, you first call `useCreateTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTypeMutation, { data, loading, error }] = useCreateTypeMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateTypeMutation(baseOptions?: Apollo.MutationHookOptions<CreateTypeMutation, CreateTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTypeMutation, CreateTypeMutationVariables>(CreateTypeDocument, options);
      }
export type CreateTypeMutationHookResult = ReturnType<typeof useCreateTypeMutation>;
export type CreateTypeMutationResult = Apollo.MutationResult<CreateTypeMutation>;
export type CreateTypeMutationOptions = Apollo.BaseMutationOptions<CreateTypeMutation, CreateTypeMutationVariables>;
export const DeleteTypeDocument = gql`
    mutation DeleteType($id: Int!) {
  deleteType(id: $id) {
    id
  }
}
    `;
export type DeleteTypeMutationFn = Apollo.MutationFunction<DeleteTypeMutation, DeleteTypeMutationVariables>;

/**
 * __useDeleteTypeMutation__
 *
 * To run a mutation, you first call `useDeleteTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTypeMutation, { data, loading, error }] = useDeleteTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTypeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTypeMutation, DeleteTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTypeMutation, DeleteTypeMutationVariables>(DeleteTypeDocument, options);
      }
export type DeleteTypeMutationHookResult = ReturnType<typeof useDeleteTypeMutation>;
export type DeleteTypeMutationResult = Apollo.MutationResult<DeleteTypeMutation>;
export type DeleteTypeMutationOptions = Apollo.BaseMutationOptions<DeleteTypeMutation, DeleteTypeMutationVariables>;
export const DuplicateTypeDocument = gql`
    mutation DuplicateType($id: Int!) {
  duplicateType(id: $id) {
    id
  }
}
    `;
export type DuplicateTypeMutationFn = Apollo.MutationFunction<DuplicateTypeMutation, DuplicateTypeMutationVariables>;

/**
 * __useDuplicateTypeMutation__
 *
 * To run a mutation, you first call `useDuplicateTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateTypeMutation, { data, loading, error }] = useDuplicateTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateTypeMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateTypeMutation, DuplicateTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateTypeMutation, DuplicateTypeMutationVariables>(DuplicateTypeDocument, options);
      }
export type DuplicateTypeMutationHookResult = ReturnType<typeof useDuplicateTypeMutation>;
export type DuplicateTypeMutationResult = Apollo.MutationResult<DuplicateTypeMutation>;
export type DuplicateTypeMutationOptions = Apollo.BaseMutationOptions<DuplicateTypeMutation, DuplicateTypeMutationVariables>;
export const ToggleTypeDocument = gql`
    mutation ToggleType($id: Int!) {
  toggleType(id: $id) {
    id
  }
}
    `;
export type ToggleTypeMutationFn = Apollo.MutationFunction<ToggleTypeMutation, ToggleTypeMutationVariables>;

/**
 * __useToggleTypeMutation__
 *
 * To run a mutation, you first call `useToggleTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleTypeMutation, { data, loading, error }] = useToggleTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleTypeMutation(baseOptions?: Apollo.MutationHookOptions<ToggleTypeMutation, ToggleTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleTypeMutation, ToggleTypeMutationVariables>(ToggleTypeDocument, options);
      }
export type ToggleTypeMutationHookResult = ReturnType<typeof useToggleTypeMutation>;
export type ToggleTypeMutationResult = Apollo.MutationResult<ToggleTypeMutation>;
export type ToggleTypeMutationOptions = Apollo.BaseMutationOptions<ToggleTypeMutation, ToggleTypeMutationVariables>;
export const UpdateTypeDocument = gql`
    mutation UpdateType($id: Int!, $data: TypeInput!) {
  updateType(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateTypeMutationFn = Apollo.MutationFunction<UpdateTypeMutation, UpdateTypeMutationVariables>;

/**
 * __useUpdateTypeMutation__
 *
 * To run a mutation, you first call `useUpdateTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTypeMutation, { data, loading, error }] = useUpdateTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTypeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTypeMutation, UpdateTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTypeMutation, UpdateTypeMutationVariables>(UpdateTypeDocument, options);
      }
export type UpdateTypeMutationHookResult = ReturnType<typeof useUpdateTypeMutation>;
export type UpdateTypeMutationResult = Apollo.MutationResult<UpdateTypeMutation>;
export type UpdateTypeMutationOptions = Apollo.BaseMutationOptions<UpdateTypeMutation, UpdateTypeMutationVariables>;
export const CatalogDocument = gql`
    query Catalog($data: CatalogInput!) {
  catalog(data: $data) {
    block {
      heading
      content
    }
    rootCategory {
      name
      slug
      parent {
        name
        slug
        parent {
          name
          slug
          parent {
            name
            slug
            parent {
              name
              slug
              parent {
                name
                slug
              }
            }
          }
        }
      }
      categories {
        name
        slug
        categories {
          name
          slug
          categories {
            name
            slug
            categories {
              name
              slug
              categories {
                name
                slug
              }
            }
          }
        }
      }
    }
    categories {
      name
      slug
      imagePath
      parent {
        name
        slug
        parent {
          name
          slug
          parent {
            name
            slug
            parent {
              name
              slug
            }
          }
        }
      }
    }
    filters {
      sizes {
        label
        value
        count
      }
      colors {
        label
        value
        count
      }
      hues {
        label
        value
        count
      }
      types {
        iconPath
        uncheckedIconPath
        value
      }
      manufacturers {
        label
        value
        count
      }
      materials {
        label
        value
        count
      }
      collections {
        label
        value
        count
      }
      holidays {
        label
        value
        count
      }
      countries {
        label
        value
        count
      }
      price {
        min
        max
      }
    }
    products {
      id
      name
      slug
      sku
      iconPath
      description
      packageQuantity
      price
      oldPrice
      views
      boughtTimes
      images
      sizes {
        size
        price
        oldPrice
      }
      colors {
        color
        images
      }
      types {
        iconPath
      }
      status
      createdAt
    }
    productsCount
  }
}
    `;

/**
 * __useCatalogQuery__
 *
 * To run a query within a React component, call `useCatalogQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatalogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatalogQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCatalogQuery(baseOptions: Apollo.QueryHookOptions<CatalogQuery, CatalogQueryVariables> & ({ variables: CatalogQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CatalogQuery, CatalogQueryVariables>(CatalogDocument, options);
      }
export function useCatalogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CatalogQuery, CatalogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CatalogQuery, CatalogQueryVariables>(CatalogDocument, options);
        }
export function useCatalogSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CatalogQuery, CatalogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CatalogQuery, CatalogQueryVariables>(CatalogDocument, options);
        }
export type CatalogQueryHookResult = ReturnType<typeof useCatalogQuery>;
export type CatalogLazyQueryHookResult = ReturnType<typeof useCatalogLazyQuery>;
export type CatalogSuspenseQueryHookResult = ReturnType<typeof useCatalogSuspenseQuery>;
export type CatalogQueryResult = Apollo.QueryResult<CatalogQuery, CatalogQueryVariables>;
export const CategoriesDocument = gql`
    query Categories($query: QueryCategoryInput!) {
  categories(query: $query) {
    categories {
      id
      name
      slug
    }
    count
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables> & ({ variables: CategoriesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export function useCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesSuspenseQueryHookResult = ReturnType<typeof useCategoriesSuspenseQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const CategoryByIdDocument = gql`
    query CategoryById($id: Int!) {
  categoryById(id: $id) {
    name
    imagePath
    parent {
      id
      name
    }
  }
}
    `;

/**
 * __useCategoryByIdQuery__
 *
 * To run a query within a React component, call `useCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCategoryByIdQuery(baseOptions: Apollo.QueryHookOptions<CategoryByIdQuery, CategoryByIdQueryVariables> & ({ variables: CategoryByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryByIdQuery, CategoryByIdQueryVariables>(CategoryByIdDocument, options);
      }
export function useCategoryByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryByIdQuery, CategoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryByIdQuery, CategoryByIdQueryVariables>(CategoryByIdDocument, options);
        }
export function useCategoryByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoryByIdQuery, CategoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoryByIdQuery, CategoryByIdQueryVariables>(CategoryByIdDocument, options);
        }
export type CategoryByIdQueryHookResult = ReturnType<typeof useCategoryByIdQuery>;
export type CategoryByIdLazyQueryHookResult = ReturnType<typeof useCategoryByIdLazyQuery>;
export type CategoryByIdSuspenseQueryHookResult = ReturnType<typeof useCategoryByIdSuspenseQuery>;
export type CategoryByIdQueryResult = Apollo.QueryResult<CategoryByIdQuery, CategoryByIdQueryVariables>;
export const CategorySeoDocument = gql`
    query CategorySeo($slug: String!) {
  categorySeo(slug: $slug) {
    title
    description
  }
}
    `;

/**
 * __useCategorySeoQuery__
 *
 * To run a query within a React component, call `useCategorySeoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategorySeoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategorySeoQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCategorySeoQuery(baseOptions: Apollo.QueryHookOptions<CategorySeoQuery, CategorySeoQueryVariables> & ({ variables: CategorySeoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategorySeoQuery, CategorySeoQueryVariables>(CategorySeoDocument, options);
      }
export function useCategorySeoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategorySeoQuery, CategorySeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategorySeoQuery, CategorySeoQueryVariables>(CategorySeoDocument, options);
        }
export function useCategorySeoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategorySeoQuery, CategorySeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategorySeoQuery, CategorySeoQueryVariables>(CategorySeoDocument, options);
        }
export type CategorySeoQueryHookResult = ReturnType<typeof useCategorySeoQuery>;
export type CategorySeoLazyQueryHookResult = ReturnType<typeof useCategorySeoLazyQuery>;
export type CategorySeoSuspenseQueryHookResult = ReturnType<typeof useCategorySeoSuspenseQuery>;
export type CategorySeoQueryResult = Apollo.QueryResult<CategorySeoQuery, CategorySeoQueryVariables>;
export const CharacteristicByIdDocument = gql`
    query CharacteristicById($id: Int!) {
  characteristicById(id: $id) {
    name
    type
  }
}
    `;

/**
 * __useCharacteristicByIdQuery__
 *
 * To run a query within a React component, call `useCharacteristicByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharacteristicByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharacteristicByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCharacteristicByIdQuery(baseOptions: Apollo.QueryHookOptions<CharacteristicByIdQuery, CharacteristicByIdQueryVariables> & ({ variables: CharacteristicByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CharacteristicByIdQuery, CharacteristicByIdQueryVariables>(CharacteristicByIdDocument, options);
      }
export function useCharacteristicByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CharacteristicByIdQuery, CharacteristicByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CharacteristicByIdQuery, CharacteristicByIdQueryVariables>(CharacteristicByIdDocument, options);
        }
export function useCharacteristicByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CharacteristicByIdQuery, CharacteristicByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CharacteristicByIdQuery, CharacteristicByIdQueryVariables>(CharacteristicByIdDocument, options);
        }
export type CharacteristicByIdQueryHookResult = ReturnType<typeof useCharacteristicByIdQuery>;
export type CharacteristicByIdLazyQueryHookResult = ReturnType<typeof useCharacteristicByIdLazyQuery>;
export type CharacteristicByIdSuspenseQueryHookResult = ReturnType<typeof useCharacteristicByIdSuspenseQuery>;
export type CharacteristicByIdQueryResult = Apollo.QueryResult<CharacteristicByIdQuery, CharacteristicByIdQueryVariables>;
export const CharacteristicsDocument = gql`
    query Characteristics($query: QueryInput!) {
  characteristics(query: $query) {
    characteristics {
      id
      name
      slug
      type
    }
    count
  }
}
    `;

/**
 * __useCharacteristicsQuery__
 *
 * To run a query within a React component, call `useCharacteristicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharacteristicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharacteristicsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useCharacteristicsQuery(baseOptions: Apollo.QueryHookOptions<CharacteristicsQuery, CharacteristicsQueryVariables> & ({ variables: CharacteristicsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CharacteristicsQuery, CharacteristicsQueryVariables>(CharacteristicsDocument, options);
      }
export function useCharacteristicsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CharacteristicsQuery, CharacteristicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CharacteristicsQuery, CharacteristicsQueryVariables>(CharacteristicsDocument, options);
        }
export function useCharacteristicsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CharacteristicsQuery, CharacteristicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CharacteristicsQuery, CharacteristicsQueryVariables>(CharacteristicsDocument, options);
        }
export type CharacteristicsQueryHookResult = ReturnType<typeof useCharacteristicsQuery>;
export type CharacteristicsLazyQueryHookResult = ReturnType<typeof useCharacteristicsLazyQuery>;
export type CharacteristicsSuspenseQueryHookResult = ReturnType<typeof useCharacteristicsSuspenseQuery>;
export type CharacteristicsQueryResult = Apollo.QueryResult<CharacteristicsQuery, CharacteristicsQueryVariables>;
export const CollectionByIdDocument = gql`
    query CollectionById($id: Int!) {
  collectionById(id: $id) {
    name
  }
}
    `;

/**
 * __useCollectionByIdQuery__
 *
 * To run a query within a React component, call `useCollectionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCollectionByIdQuery(baseOptions: Apollo.QueryHookOptions<CollectionByIdQuery, CollectionByIdQueryVariables> & ({ variables: CollectionByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionByIdQuery, CollectionByIdQueryVariables>(CollectionByIdDocument, options);
      }
export function useCollectionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionByIdQuery, CollectionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionByIdQuery, CollectionByIdQueryVariables>(CollectionByIdDocument, options);
        }
export function useCollectionByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CollectionByIdQuery, CollectionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CollectionByIdQuery, CollectionByIdQueryVariables>(CollectionByIdDocument, options);
        }
export type CollectionByIdQueryHookResult = ReturnType<typeof useCollectionByIdQuery>;
export type CollectionByIdLazyQueryHookResult = ReturnType<typeof useCollectionByIdLazyQuery>;
export type CollectionByIdSuspenseQueryHookResult = ReturnType<typeof useCollectionByIdSuspenseQuery>;
export type CollectionByIdQueryResult = Apollo.QueryResult<CollectionByIdQuery, CollectionByIdQueryVariables>;
export const CollectionsDocument = gql`
    query Collections($query: QueryInput!) {
  collections(query: $query) {
    collections {
      id
      name
      slug
    }
    count
  }
}
    `;

/**
 * __useCollectionsQuery__
 *
 * To run a query within a React component, call `useCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useCollectionsQuery(baseOptions: Apollo.QueryHookOptions<CollectionsQuery, CollectionsQueryVariables> & ({ variables: CollectionsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, options);
      }
export function useCollectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionsQuery, CollectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, options);
        }
export function useCollectionsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CollectionsQuery, CollectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, options);
        }
export type CollectionsQueryHookResult = ReturnType<typeof useCollectionsQuery>;
export type CollectionsLazyQueryHookResult = ReturnType<typeof useCollectionsLazyQuery>;
export type CollectionsSuspenseQueryHookResult = ReturnType<typeof useCollectionsSuspenseQuery>;
export type CollectionsQueryResult = Apollo.QueryResult<CollectionsQuery, CollectionsQueryVariables>;
export const HolidayByIdDocument = gql`
    query HolidayById($id: Int!) {
  holidayById(id: $id) {
    name
  }
}
    `;

/**
 * __useHolidayByIdQuery__
 *
 * To run a query within a React component, call `useHolidayByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useHolidayByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHolidayByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useHolidayByIdQuery(baseOptions: Apollo.QueryHookOptions<HolidayByIdQuery, HolidayByIdQueryVariables> & ({ variables: HolidayByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HolidayByIdQuery, HolidayByIdQueryVariables>(HolidayByIdDocument, options);
      }
export function useHolidayByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HolidayByIdQuery, HolidayByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HolidayByIdQuery, HolidayByIdQueryVariables>(HolidayByIdDocument, options);
        }
export function useHolidayByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HolidayByIdQuery, HolidayByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HolidayByIdQuery, HolidayByIdQueryVariables>(HolidayByIdDocument, options);
        }
export type HolidayByIdQueryHookResult = ReturnType<typeof useHolidayByIdQuery>;
export type HolidayByIdLazyQueryHookResult = ReturnType<typeof useHolidayByIdLazyQuery>;
export type HolidayByIdSuspenseQueryHookResult = ReturnType<typeof useHolidayByIdSuspenseQuery>;
export type HolidayByIdQueryResult = Apollo.QueryResult<HolidayByIdQuery, HolidayByIdQueryVariables>;
export const HolidaysDocument = gql`
    query Holidays($query: QueryInput!) {
  holidays(query: $query) {
    holidays {
      id
      name
      slug
    }
    count
  }
}
    `;

/**
 * __useHolidaysQuery__
 *
 * To run a query within a React component, call `useHolidaysQuery` and pass it any options that fit your needs.
 * When your component renders, `useHolidaysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHolidaysQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useHolidaysQuery(baseOptions: Apollo.QueryHookOptions<HolidaysQuery, HolidaysQueryVariables> & ({ variables: HolidaysQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HolidaysQuery, HolidaysQueryVariables>(HolidaysDocument, options);
      }
export function useHolidaysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HolidaysQuery, HolidaysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HolidaysQuery, HolidaysQueryVariables>(HolidaysDocument, options);
        }
export function useHolidaysSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HolidaysQuery, HolidaysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HolidaysQuery, HolidaysQueryVariables>(HolidaysDocument, options);
        }
export type HolidaysQueryHookResult = ReturnType<typeof useHolidaysQuery>;
export type HolidaysLazyQueryHookResult = ReturnType<typeof useHolidaysLazyQuery>;
export type HolidaysSuspenseQueryHookResult = ReturnType<typeof useHolidaysSuspenseQuery>;
export type HolidaysQueryResult = Apollo.QueryResult<HolidaysQuery, HolidaysQueryVariables>;
export const OrderByIdDocument = gql`
    query OrderById($id: Int!) {
  orderById(id: $id) {
    id
    name
    phone
    total
    items {
      quantity
      product {
        id
        name
        slug
        oldPrice
        price
        images
      }
      color
      size
    }
    createdAt
  }
}
    `;

/**
 * __useOrderByIdQuery__
 *
 * To run a query within a React component, call `useOrderByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrderByIdQuery(baseOptions: Apollo.QueryHookOptions<OrderByIdQuery, OrderByIdQueryVariables> & ({ variables: OrderByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrderByIdQuery, OrderByIdQueryVariables>(OrderByIdDocument, options);
      }
export function useOrderByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderByIdQuery, OrderByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrderByIdQuery, OrderByIdQueryVariables>(OrderByIdDocument, options);
        }
export function useOrderByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<OrderByIdQuery, OrderByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OrderByIdQuery, OrderByIdQueryVariables>(OrderByIdDocument, options);
        }
export type OrderByIdQueryHookResult = ReturnType<typeof useOrderByIdQuery>;
export type OrderByIdLazyQueryHookResult = ReturnType<typeof useOrderByIdLazyQuery>;
export type OrderByIdSuspenseQueryHookResult = ReturnType<typeof useOrderByIdSuspenseQuery>;
export type OrderByIdQueryResult = Apollo.QueryResult<OrderByIdQuery, OrderByIdQueryVariables>;
export const OrdersDocument = gql`
    query Orders($query: QueryInput!) {
  orders(query: $query) {
    orders {
      id
      status
      total
      name
      phone
      items {
        quantity
      }
      createdAt
    }
    count
  }
}
    `;

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useOrdersQuery(baseOptions: Apollo.QueryHookOptions<OrdersQuery, OrdersQueryVariables> & ({ variables: OrdersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
      }
export function useOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
        }
export function useOrdersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
        }
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export type OrdersSuspenseQueryHookResult = ReturnType<typeof useOrdersSuspenseQuery>;
export type OrdersQueryResult = Apollo.QueryResult<OrdersQuery, OrdersQueryVariables>;
export const PageDocument = gql`
    query Page($type: PageType!) {
  page(type: $type) {
    blocks {
      heading
      content
    }
    seo {
      title
      description
    }
  }
}
    `;

/**
 * __usePageQuery__
 *
 * To run a query within a React component, call `usePageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function usePageQuery(baseOptions: Apollo.QueryHookOptions<PageQuery, PageQueryVariables> & ({ variables: PageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageQuery, PageQueryVariables>(PageDocument, options);
      }
export function usePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageQuery, PageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageQuery, PageQueryVariables>(PageDocument, options);
        }
export function usePageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PageQuery, PageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PageQuery, PageQueryVariables>(PageDocument, options);
        }
export type PageQueryHookResult = ReturnType<typeof usePageQuery>;
export type PageLazyQueryHookResult = ReturnType<typeof usePageLazyQuery>;
export type PageSuspenseQueryHookResult = ReturnType<typeof usePageSuspenseQuery>;
export type PageQueryResult = Apollo.QueryResult<PageQuery, PageQueryVariables>;
export const PageBlockDocument = gql`
    query PageBlock($type: BlockType!) {
  pageBlock(type: $type) {
    heading
    content
  }
}
    `;

/**
 * __usePageBlockQuery__
 *
 * To run a query within a React component, call `usePageBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageBlockQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function usePageBlockQuery(baseOptions: Apollo.QueryHookOptions<PageBlockQuery, PageBlockQueryVariables> & ({ variables: PageBlockQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageBlockQuery, PageBlockQueryVariables>(PageBlockDocument, options);
      }
export function usePageBlockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageBlockQuery, PageBlockQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageBlockQuery, PageBlockQueryVariables>(PageBlockDocument, options);
        }
export function usePageBlockSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PageBlockQuery, PageBlockQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PageBlockQuery, PageBlockQueryVariables>(PageBlockDocument, options);
        }
export type PageBlockQueryHookResult = ReturnType<typeof usePageBlockQuery>;
export type PageBlockLazyQueryHookResult = ReturnType<typeof usePageBlockLazyQuery>;
export type PageBlockSuspenseQueryHookResult = ReturnType<typeof usePageBlockSuspenseQuery>;
export type PageBlockQueryResult = Apollo.QueryResult<PageBlockQuery, PageBlockQueryVariables>;
export const PageSeoDocument = gql`
    query PageSeo($type: PageType!) {
  pageSeo(type: $type) {
    title
    description
  }
}
    `;

/**
 * __usePageSeoQuery__
 *
 * To run a query within a React component, call `usePageSeoQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageSeoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageSeoQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function usePageSeoQuery(baseOptions: Apollo.QueryHookOptions<PageSeoQuery, PageSeoQueryVariables> & ({ variables: PageSeoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageSeoQuery, PageSeoQueryVariables>(PageSeoDocument, options);
      }
export function usePageSeoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageSeoQuery, PageSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageSeoQuery, PageSeoQueryVariables>(PageSeoDocument, options);
        }
export function usePageSeoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PageSeoQuery, PageSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PageSeoQuery, PageSeoQueryVariables>(PageSeoDocument, options);
        }
export type PageSeoQueryHookResult = ReturnType<typeof usePageSeoQuery>;
export type PageSeoLazyQueryHookResult = ReturnType<typeof usePageSeoLazyQuery>;
export type PageSeoSuspenseQueryHookResult = ReturnType<typeof usePageSeoSuspenseQuery>;
export type PageSeoQueryResult = Apollo.QueryResult<PageSeoQuery, PageSeoQueryVariables>;
export const AboutDocument = gql`
    query About {
  about {
    name
    content
  }
}
    `;

/**
 * __useAboutQuery__
 *
 * To run a query within a React component, call `useAboutQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutQuery({
 *   variables: {
 *   },
 * });
 */
export function useAboutQuery(baseOptions?: Apollo.QueryHookOptions<AboutQuery, AboutQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AboutQuery, AboutQueryVariables>(AboutDocument, options);
      }
export function useAboutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AboutQuery, AboutQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AboutQuery, AboutQueryVariables>(AboutDocument, options);
        }
export function useAboutSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AboutQuery, AboutQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AboutQuery, AboutQueryVariables>(AboutDocument, options);
        }
export type AboutQueryHookResult = ReturnType<typeof useAboutQuery>;
export type AboutLazyQueryHookResult = ReturnType<typeof useAboutLazyQuery>;
export type AboutSuspenseQueryHookResult = ReturnType<typeof useAboutSuspenseQuery>;
export type AboutQueryResult = Apollo.QueryResult<AboutQuery, AboutQueryVariables>;
export const ForBuyersDocument = gql`
    query ForBuyers {
  forBuyers {
    name
    content
  }
}
    `;

/**
 * __useForBuyersQuery__
 *
 * To run a query within a React component, call `useForBuyersQuery` and pass it any options that fit your needs.
 * When your component renders, `useForBuyersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useForBuyersQuery({
 *   variables: {
 *   },
 * });
 */
export function useForBuyersQuery(baseOptions?: Apollo.QueryHookOptions<ForBuyersQuery, ForBuyersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ForBuyersQuery, ForBuyersQueryVariables>(ForBuyersDocument, options);
      }
export function useForBuyersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ForBuyersQuery, ForBuyersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ForBuyersQuery, ForBuyersQueryVariables>(ForBuyersDocument, options);
        }
export function useForBuyersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ForBuyersQuery, ForBuyersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ForBuyersQuery, ForBuyersQueryVariables>(ForBuyersDocument, options);
        }
export type ForBuyersQueryHookResult = ReturnType<typeof useForBuyersQuery>;
export type ForBuyersLazyQueryHookResult = ReturnType<typeof useForBuyersLazyQuery>;
export type ForBuyersSuspenseQueryHookResult = ReturnType<typeof useForBuyersSuspenseQuery>;
export type ForBuyersQueryResult = Apollo.QueryResult<ForBuyersQuery, ForBuyersQueryVariables>;
export const ShippingAndPaymentDocument = gql`
    query ShippingAndPayment {
  shippingAndPayment {
    shippingName
    shippingContent
    paymentName
    paymentContent
  }
}
    `;

/**
 * __useShippingAndPaymentQuery__
 *
 * To run a query within a React component, call `useShippingAndPaymentQuery` and pass it any options that fit your needs.
 * When your component renders, `useShippingAndPaymentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShippingAndPaymentQuery({
 *   variables: {
 *   },
 * });
 */
export function useShippingAndPaymentQuery(baseOptions?: Apollo.QueryHookOptions<ShippingAndPaymentQuery, ShippingAndPaymentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShippingAndPaymentQuery, ShippingAndPaymentQueryVariables>(ShippingAndPaymentDocument, options);
      }
export function useShippingAndPaymentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShippingAndPaymentQuery, ShippingAndPaymentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShippingAndPaymentQuery, ShippingAndPaymentQueryVariables>(ShippingAndPaymentDocument, options);
        }
export function useShippingAndPaymentSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ShippingAndPaymentQuery, ShippingAndPaymentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ShippingAndPaymentQuery, ShippingAndPaymentQueryVariables>(ShippingAndPaymentDocument, options);
        }
export type ShippingAndPaymentQueryHookResult = ReturnType<typeof useShippingAndPaymentQuery>;
export type ShippingAndPaymentLazyQueryHookResult = ReturnType<typeof useShippingAndPaymentLazyQuery>;
export type ShippingAndPaymentSuspenseQueryHookResult = ReturnType<typeof useShippingAndPaymentSuspenseQuery>;
export type ShippingAndPaymentQueryResult = Apollo.QueryResult<ShippingAndPaymentQuery, ShippingAndPaymentQueryVariables>;
export const PostByIdDocument = gql`
    query PostById($id: Int!) {
  postById(id: $id) {
    name
    excerpt
    description
    poster
    bigPoster
    rubrics {
      id
      name
    }
  }
}
    `;

/**
 * __usePostByIdQuery__
 *
 * To run a query within a React component, call `usePostByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostByIdQuery(baseOptions: Apollo.QueryHookOptions<PostByIdQuery, PostByIdQueryVariables> & ({ variables: PostByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostByIdQuery, PostByIdQueryVariables>(PostByIdDocument, options);
      }
export function usePostByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostByIdQuery, PostByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostByIdQuery, PostByIdQueryVariables>(PostByIdDocument, options);
        }
export function usePostByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PostByIdQuery, PostByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PostByIdQuery, PostByIdQueryVariables>(PostByIdDocument, options);
        }
export type PostByIdQueryHookResult = ReturnType<typeof usePostByIdQuery>;
export type PostByIdLazyQueryHookResult = ReturnType<typeof usePostByIdLazyQuery>;
export type PostByIdSuspenseQueryHookResult = ReturnType<typeof usePostByIdSuspenseQuery>;
export type PostByIdQueryResult = Apollo.QueryResult<PostByIdQuery, PostByIdQueryVariables>;
export const PostBySlugDocument = gql`
    query PostBySlug($slug: String!) {
  postBySlug(slug: $slug) {
    name
    excerpt
    description
    poster
    bigPoster
    rubrics {
      id
      name
    }
    createdAt
  }
}
    `;

/**
 * __usePostBySlugQuery__
 *
 * To run a query within a React component, call `usePostBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePostBySlugQuery(baseOptions: Apollo.QueryHookOptions<PostBySlugQuery, PostBySlugQueryVariables> & ({ variables: PostBySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostBySlugQuery, PostBySlugQueryVariables>(PostBySlugDocument, options);
      }
export function usePostBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostBySlugQuery, PostBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostBySlugQuery, PostBySlugQueryVariables>(PostBySlugDocument, options);
        }
export function usePostBySlugSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PostBySlugQuery, PostBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PostBySlugQuery, PostBySlugQueryVariables>(PostBySlugDocument, options);
        }
export type PostBySlugQueryHookResult = ReturnType<typeof usePostBySlugQuery>;
export type PostBySlugLazyQueryHookResult = ReturnType<typeof usePostBySlugLazyQuery>;
export type PostBySlugSuspenseQueryHookResult = ReturnType<typeof usePostBySlugSuspenseQuery>;
export type PostBySlugQueryResult = Apollo.QueryResult<PostBySlugQuery, PostBySlugQueryVariables>;
export const PostSeoDocument = gql`
    query PostSeo($slug: String!) {
  postSeo(slug: $slug) {
    title
    description
  }
}
    `;

/**
 * __usePostSeoQuery__
 *
 * To run a query within a React component, call `usePostSeoQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostSeoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostSeoQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePostSeoQuery(baseOptions: Apollo.QueryHookOptions<PostSeoQuery, PostSeoQueryVariables> & ({ variables: PostSeoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostSeoQuery, PostSeoQueryVariables>(PostSeoDocument, options);
      }
export function usePostSeoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostSeoQuery, PostSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostSeoQuery, PostSeoQueryVariables>(PostSeoDocument, options);
        }
export function usePostSeoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PostSeoQuery, PostSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PostSeoQuery, PostSeoQueryVariables>(PostSeoDocument, options);
        }
export type PostSeoQueryHookResult = ReturnType<typeof usePostSeoQuery>;
export type PostSeoLazyQueryHookResult = ReturnType<typeof usePostSeoLazyQuery>;
export type PostSeoSuspenseQueryHookResult = ReturnType<typeof usePostSeoSuspenseQuery>;
export type PostSeoQueryResult = Apollo.QueryResult<PostSeoQuery, PostSeoQueryVariables>;
export const PostsDocument = gql`
    query Posts($query: QueryInput!) {
  posts(query: $query) {
    posts {
      id
      name
      slug
      excerpt
      description
      poster
      bigPoster
      rubrics {
        name
      }
      createdAt
    }
    count
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function usePostsQuery(baseOptions: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables> & ({ variables: PostsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export function usePostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsSuspenseQueryHookResult = ReturnType<typeof usePostsSuspenseQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const ProductByIdDocument = gql`
    query ProductById($id: Int!) {
  productById(id: $id) {
    name
    sku
    price
    oldPrice
    packageQuantity
    images
    tags {
      id
      name
    }
    types {
      id
      name
    }
    holidays {
      id
      name
    }
    characteristics {
      id
      name
    }
    categories {
      id
      name
    }
    collections {
      id
      name
    }
    description
    iconPath
    colors {
      color
      images
    }
    sizes {
      size
      price
      oldPrice
    }
    seo {
      title
      description
    }
  }
}
    `;

/**
 * __useProductByIdQuery__
 *
 * To run a query within a React component, call `useProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductByIdQuery(baseOptions: Apollo.QueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables> & ({ variables: ProductByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, options);
      }
export function useProductByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, options);
        }
export function useProductByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, options);
        }
export type ProductByIdQueryHookResult = ReturnType<typeof useProductByIdQuery>;
export type ProductByIdLazyQueryHookResult = ReturnType<typeof useProductByIdLazyQuery>;
export type ProductByIdSuspenseQueryHookResult = ReturnType<typeof useProductByIdSuspenseQuery>;
export type ProductByIdQueryResult = Apollo.QueryResult<ProductByIdQuery, ProductByIdQueryVariables>;
export const ProductBySlugDocument = gql`
    query ProductBySlug($slug: String!) {
  productBySlug(slug: $slug) {
    product {
      id
      name
      slug
      sku
      iconPath
      description
      packageQuantity
      price
      oldPrice
      views
      boughtTimes
      images
      categories {
        name
        slug
        imagePath
        parent {
          name
          slug
          parent {
            name
            slug
            parent {
              name
              slug
              parent {
                name
                slug
              }
            }
          }
        }
      }
      sizes {
        size
        price
        oldPrice
      }
      colors {
        color
        images
      }
      types {
        iconPath
      }
      characteristics {
        name
        type
      }
      status
      createdAt
    }
    similarProducts {
      id
      name
      slug
      sku
      iconPath
      description
      packageQuantity
      price
      oldPrice
      views
      boughtTimes
      images
      sizes {
        size
        price
        oldPrice
      }
      colors {
        color
        images
      }
      types {
        iconPath
      }
      status
      createdAt
    }
  }
}
    `;

/**
 * __useProductBySlugQuery__
 *
 * To run a query within a React component, call `useProductBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useProductBySlugQuery(baseOptions: Apollo.QueryHookOptions<ProductBySlugQuery, ProductBySlugQueryVariables> & ({ variables: ProductBySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductBySlugQuery, ProductBySlugQueryVariables>(ProductBySlugDocument, options);
      }
export function useProductBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductBySlugQuery, ProductBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductBySlugQuery, ProductBySlugQueryVariables>(ProductBySlugDocument, options);
        }
export function useProductBySlugSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductBySlugQuery, ProductBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductBySlugQuery, ProductBySlugQueryVariables>(ProductBySlugDocument, options);
        }
export type ProductBySlugQueryHookResult = ReturnType<typeof useProductBySlugQuery>;
export type ProductBySlugLazyQueryHookResult = ReturnType<typeof useProductBySlugLazyQuery>;
export type ProductBySlugSuspenseQueryHookResult = ReturnType<typeof useProductBySlugSuspenseQuery>;
export type ProductBySlugQueryResult = Apollo.QueryResult<ProductBySlugQuery, ProductBySlugQueryVariables>;
export const ProductSeoDocument = gql`
    query ProductSeo($slug: String!) {
  productSeo(slug: $slug) {
    title
    description
  }
}
    `;

/**
 * __useProductSeoQuery__
 *
 * To run a query within a React component, call `useProductSeoQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductSeoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductSeoQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useProductSeoQuery(baseOptions: Apollo.QueryHookOptions<ProductSeoQuery, ProductSeoQueryVariables> & ({ variables: ProductSeoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductSeoQuery, ProductSeoQueryVariables>(ProductSeoDocument, options);
      }
export function useProductSeoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductSeoQuery, ProductSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductSeoQuery, ProductSeoQueryVariables>(ProductSeoDocument, options);
        }
export function useProductSeoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductSeoQuery, ProductSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductSeoQuery, ProductSeoQueryVariables>(ProductSeoDocument, options);
        }
export type ProductSeoQueryHookResult = ReturnType<typeof useProductSeoQuery>;
export type ProductSeoLazyQueryHookResult = ReturnType<typeof useProductSeoLazyQuery>;
export type ProductSeoSuspenseQueryHookResult = ReturnType<typeof useProductSeoSuspenseQuery>;
export type ProductSeoQueryResult = Apollo.QueryResult<ProductSeoQuery, ProductSeoQueryVariables>;
export const ProductsDocument = gql`
    query Products($query: QueryProductInput!, $isPopular: Boolean) {
  products(query: $query, isPopular: $isPopular) {
    products {
      id
      name
      slug
      sku
      iconPath
      description
      packageQuantity
      price
      oldPrice
      views
      boughtTimes
      images
      sizes {
        size
        price
        oldPrice
      }
      colors {
        color
        images
      }
      types {
        iconPath
      }
      status
      createdAt
    }
    count
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      query: // value for 'query'
 *      isPopular: // value for 'isPopular'
 *   },
 * });
 */
export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables> & ({ variables: ProductsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export function useProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsSuspenseQueryHookResult = ReturnType<typeof useProductsSuspenseQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const ReviewByIdDocument = gql`
    query ReviewById($id: Int!) {
  reviewById(id: $id) {
    author
    content
    photo
  }
}
    `;

/**
 * __useReviewByIdQuery__
 *
 * To run a query within a React component, call `useReviewByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReviewByIdQuery(baseOptions: Apollo.QueryHookOptions<ReviewByIdQuery, ReviewByIdQueryVariables> & ({ variables: ReviewByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewByIdQuery, ReviewByIdQueryVariables>(ReviewByIdDocument, options);
      }
export function useReviewByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewByIdQuery, ReviewByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewByIdQuery, ReviewByIdQueryVariables>(ReviewByIdDocument, options);
        }
export function useReviewByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ReviewByIdQuery, ReviewByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ReviewByIdQuery, ReviewByIdQueryVariables>(ReviewByIdDocument, options);
        }
export type ReviewByIdQueryHookResult = ReturnType<typeof useReviewByIdQuery>;
export type ReviewByIdLazyQueryHookResult = ReturnType<typeof useReviewByIdLazyQuery>;
export type ReviewByIdSuspenseQueryHookResult = ReturnType<typeof useReviewByIdSuspenseQuery>;
export type ReviewByIdQueryResult = Apollo.QueryResult<ReviewByIdQuery, ReviewByIdQueryVariables>;
export const ReviewsDocument = gql`
    query Reviews($query: QueryInput!) {
  reviews(query: $query) {
    reviews {
      id
      author
      content
      photo
    }
    count
  }
}
    `;

/**
 * __useReviewsQuery__
 *
 * To run a query within a React component, call `useReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useReviewsQuery(baseOptions: Apollo.QueryHookOptions<ReviewsQuery, ReviewsQueryVariables> & ({ variables: ReviewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
      }
export function useReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
        }
export function useReviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
        }
export type ReviewsQueryHookResult = ReturnType<typeof useReviewsQuery>;
export type ReviewsLazyQueryHookResult = ReturnType<typeof useReviewsLazyQuery>;
export type ReviewsSuspenseQueryHookResult = ReturnType<typeof useReviewsSuspenseQuery>;
export type ReviewsQueryResult = Apollo.QueryResult<ReviewsQuery, ReviewsQueryVariables>;
export const RubricByIdDocument = gql`
    query RubricById($id: Int!) {
  rubricById(id: $id) {
    name
  }
}
    `;

/**
 * __useRubricByIdQuery__
 *
 * To run a query within a React component, call `useRubricByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useRubricByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRubricByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRubricByIdQuery(baseOptions: Apollo.QueryHookOptions<RubricByIdQuery, RubricByIdQueryVariables> & ({ variables: RubricByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RubricByIdQuery, RubricByIdQueryVariables>(RubricByIdDocument, options);
      }
export function useRubricByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RubricByIdQuery, RubricByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RubricByIdQuery, RubricByIdQueryVariables>(RubricByIdDocument, options);
        }
export function useRubricByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RubricByIdQuery, RubricByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RubricByIdQuery, RubricByIdQueryVariables>(RubricByIdDocument, options);
        }
export type RubricByIdQueryHookResult = ReturnType<typeof useRubricByIdQuery>;
export type RubricByIdLazyQueryHookResult = ReturnType<typeof useRubricByIdLazyQuery>;
export type RubricByIdSuspenseQueryHookResult = ReturnType<typeof useRubricByIdSuspenseQuery>;
export type RubricByIdQueryResult = Apollo.QueryResult<RubricByIdQuery, RubricByIdQueryVariables>;
export const RubricsDocument = gql`
    query Rubrics($query: QueryInput!) {
  rubrics(query: $query) {
    rubrics {
      id
      name
      slug
    }
    count
  }
}
    `;

/**
 * __useRubricsQuery__
 *
 * To run a query within a React component, call `useRubricsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRubricsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRubricsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useRubricsQuery(baseOptions: Apollo.QueryHookOptions<RubricsQuery, RubricsQueryVariables> & ({ variables: RubricsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RubricsQuery, RubricsQueryVariables>(RubricsDocument, options);
      }
export function useRubricsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RubricsQuery, RubricsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RubricsQuery, RubricsQueryVariables>(RubricsDocument, options);
        }
export function useRubricsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RubricsQuery, RubricsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RubricsQuery, RubricsQueryVariables>(RubricsDocument, options);
        }
export type RubricsQueryHookResult = ReturnType<typeof useRubricsQuery>;
export type RubricsLazyQueryHookResult = ReturnType<typeof useRubricsLazyQuery>;
export type RubricsSuspenseQueryHookResult = ReturnType<typeof useRubricsSuspenseQuery>;
export type RubricsQueryResult = Apollo.QueryResult<RubricsQuery, RubricsQueryVariables>;
export const SitemapDocument = gql`
    query Sitemap {
  sitemap {
    categoriesSlugs
    productsSlugs
    postsSlugs
  }
}
    `;

/**
 * __useSitemapQuery__
 *
 * To run a query within a React component, call `useSitemapQuery` and pass it any options that fit your needs.
 * When your component renders, `useSitemapQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSitemapQuery({
 *   variables: {
 *   },
 * });
 */
export function useSitemapQuery(baseOptions?: Apollo.QueryHookOptions<SitemapQuery, SitemapQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SitemapQuery, SitemapQueryVariables>(SitemapDocument, options);
      }
export function useSitemapLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SitemapQuery, SitemapQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SitemapQuery, SitemapQueryVariables>(SitemapDocument, options);
        }
export function useSitemapSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SitemapQuery, SitemapQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SitemapQuery, SitemapQueryVariables>(SitemapDocument, options);
        }
export type SitemapQueryHookResult = ReturnType<typeof useSitemapQuery>;
export type SitemapLazyQueryHookResult = ReturnType<typeof useSitemapLazyQuery>;
export type SitemapSuspenseQueryHookResult = ReturnType<typeof useSitemapSuspenseQuery>;
export type SitemapQueryResult = Apollo.QueryResult<SitemapQuery, SitemapQueryVariables>;
export const GetFolderItemsDocument = gql`
    query GetFolderItems($folderPath: String!, $query: PaginationInput!) {
  folderItems(folderPath: $folderPath, query: $query) {
    folders {
      name
      size
      count
      path
      createdAt
    }
    files {
      name
      size
      extension
      path
      createdAt
    }
    count
  }
}
    `;

/**
 * __useGetFolderItemsQuery__
 *
 * To run a query within a React component, call `useGetFolderItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFolderItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFolderItemsQuery({
 *   variables: {
 *      folderPath: // value for 'folderPath'
 *      query: // value for 'query'
 *   },
 * });
 */
export function useGetFolderItemsQuery(baseOptions: Apollo.QueryHookOptions<GetFolderItemsQuery, GetFolderItemsQueryVariables> & ({ variables: GetFolderItemsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFolderItemsQuery, GetFolderItemsQueryVariables>(GetFolderItemsDocument, options);
      }
export function useGetFolderItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFolderItemsQuery, GetFolderItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFolderItemsQuery, GetFolderItemsQueryVariables>(GetFolderItemsDocument, options);
        }
export function useGetFolderItemsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetFolderItemsQuery, GetFolderItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFolderItemsQuery, GetFolderItemsQueryVariables>(GetFolderItemsDocument, options);
        }
export type GetFolderItemsQueryHookResult = ReturnType<typeof useGetFolderItemsQuery>;
export type GetFolderItemsLazyQueryHookResult = ReturnType<typeof useGetFolderItemsLazyQuery>;
export type GetFolderItemsSuspenseQueryHookResult = ReturnType<typeof useGetFolderItemsSuspenseQuery>;
export type GetFolderItemsQueryResult = Apollo.QueryResult<GetFolderItemsQuery, GetFolderItemsQueryVariables>;
export const FoldersDocument = gql`
    query Folders {
  folders {
    name
    path
    childrens {
      name
      path
      childrens {
        name
        path
        childrens {
          name
          path
          childrens {
            name
            path
            childrens {
              name
              path
              childrens {
                name
                path
                childrens {
                  name
                  path
                  childrens {
                    name
                    path
                    childrens {
                      name
                      path
                      createdAt
                    }
                    createdAt
                  }
                  createdAt
                }
                createdAt
              }
              createdAt
            }
            createdAt
          }
          createdAt
        }
        createdAt
      }
      createdAt
    }
    createdAt
  }
}
    `;

/**
 * __useFoldersQuery__
 *
 * To run a query within a React component, call `useFoldersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFoldersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFoldersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFoldersQuery(baseOptions?: Apollo.QueryHookOptions<FoldersQuery, FoldersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FoldersQuery, FoldersQueryVariables>(FoldersDocument, options);
      }
export function useFoldersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FoldersQuery, FoldersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FoldersQuery, FoldersQueryVariables>(FoldersDocument, options);
        }
export function useFoldersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FoldersQuery, FoldersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FoldersQuery, FoldersQueryVariables>(FoldersDocument, options);
        }
export type FoldersQueryHookResult = ReturnType<typeof useFoldersQuery>;
export type FoldersLazyQueryHookResult = ReturnType<typeof useFoldersLazyQuery>;
export type FoldersSuspenseQueryHookResult = ReturnType<typeof useFoldersSuspenseQuery>;
export type FoldersQueryResult = Apollo.QueryResult<FoldersQuery, FoldersQueryVariables>;
export const TagByIdDocument = gql`
    query TagById($id: Int!) {
  tagById(id: $id) {
    name
    imagePath
  }
}
    `;

/**
 * __useTagByIdQuery__
 *
 * To run a query within a React component, call `useTagByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTagByIdQuery(baseOptions: Apollo.QueryHookOptions<TagByIdQuery, TagByIdQueryVariables> & ({ variables: TagByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TagByIdQuery, TagByIdQueryVariables>(TagByIdDocument, options);
      }
export function useTagByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagByIdQuery, TagByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TagByIdQuery, TagByIdQueryVariables>(TagByIdDocument, options);
        }
export function useTagByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TagByIdQuery, TagByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TagByIdQuery, TagByIdQueryVariables>(TagByIdDocument, options);
        }
export type TagByIdQueryHookResult = ReturnType<typeof useTagByIdQuery>;
export type TagByIdLazyQueryHookResult = ReturnType<typeof useTagByIdLazyQuery>;
export type TagByIdSuspenseQueryHookResult = ReturnType<typeof useTagByIdSuspenseQuery>;
export type TagByIdQueryResult = Apollo.QueryResult<TagByIdQuery, TagByIdQueryVariables>;
export const TagsDocument = gql`
    query Tags($query: QueryInput!) {
  tags(query: $query) {
    tags {
      id
      name
      slug
      imagePath
    }
    count
  }
}
    `;

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useTagsQuery(baseOptions: Apollo.QueryHookOptions<TagsQuery, TagsQueryVariables> & ({ variables: TagsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
      }
export function useTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
        }
export function useTagsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
        }
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsSuspenseQueryHookResult = ReturnType<typeof useTagsSuspenseQuery>;
export type TagsQueryResult = Apollo.QueryResult<TagsQuery, TagsQueryVariables>;
export const TypeByIdDocument = gql`
    query TypeById($id: Int!) {
  typeById(id: $id) {
    name
    iconPath
    uncheckedIconPath
  }
}
    `;

/**
 * __useTypeByIdQuery__
 *
 * To run a query within a React component, call `useTypeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTypeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTypeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTypeByIdQuery(baseOptions: Apollo.QueryHookOptions<TypeByIdQuery, TypeByIdQueryVariables> & ({ variables: TypeByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TypeByIdQuery, TypeByIdQueryVariables>(TypeByIdDocument, options);
      }
export function useTypeByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TypeByIdQuery, TypeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TypeByIdQuery, TypeByIdQueryVariables>(TypeByIdDocument, options);
        }
export function useTypeByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TypeByIdQuery, TypeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TypeByIdQuery, TypeByIdQueryVariables>(TypeByIdDocument, options);
        }
export type TypeByIdQueryHookResult = ReturnType<typeof useTypeByIdQuery>;
export type TypeByIdLazyQueryHookResult = ReturnType<typeof useTypeByIdLazyQuery>;
export type TypeByIdSuspenseQueryHookResult = ReturnType<typeof useTypeByIdSuspenseQuery>;
export type TypeByIdQueryResult = Apollo.QueryResult<TypeByIdQuery, TypeByIdQueryVariables>;
export const TypesDocument = gql`
    query Types($query: QueryInput!) {
  types(query: $query) {
    types {
      id
      name
      iconPath
    }
    count
  }
}
    `;

/**
 * __useTypesQuery__
 *
 * To run a query within a React component, call `useTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTypesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useTypesQuery(baseOptions: Apollo.QueryHookOptions<TypesQuery, TypesQueryVariables> & ({ variables: TypesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TypesQuery, TypesQueryVariables>(TypesDocument, options);
      }
export function useTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TypesQuery, TypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TypesQuery, TypesQueryVariables>(TypesDocument, options);
        }
export function useTypesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TypesQuery, TypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TypesQuery, TypesQueryVariables>(TypesDocument, options);
        }
export type TypesQueryHookResult = ReturnType<typeof useTypesQuery>;
export type TypesLazyQueryHookResult = ReturnType<typeof useTypesLazyQuery>;
export type TypesSuspenseQueryHookResult = ReturnType<typeof useTypesSuspenseQuery>;
export type TypesQueryResult = Apollo.QueryResult<TypesQuery, TypesQueryVariables>;
export const ProfileDocument = gql`
    query Profile {
  profile {
    user {
      profile {
        login
        email
        avatarPath
      }
      role
    }
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export function useProfileSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileSuspenseQueryHookResult = ReturnType<typeof useProfileSuspenseQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;