/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Order {
  /**
   * @format int64
   * @example 10
   */
  id?: number;
  /**
   * @format int64
   * @example 198772
   */
  petId?: number;
  /**
   * @format int32
   * @example 7
   */
  quantity?: number;
  /** @format date-time */
  shipDate?: string;
  /**
   * Order Status
   * @example "approved"
   */
  status?: 'placed' | 'approved' | 'delivered';
  complete?: boolean;
}

export interface Customer {
  /**
   * @format int64
   * @example 100000
   */
  id?: number;
  /** @example "fehguy" */
  username?: string;
  address?: Address[];
}

export interface Address {
  /** @example "437 Lytton" */
  street?: string;
  /** @example "Palo Alto" */
  city?: string;
  /** @example "CA" */
  state?: string;
  /** @example 94301 */
  zip?: string;
}

export interface Category {
  /**
   * @format int64
   * @example 1
   */
  id?: number;
  /** @example "Dogs" */
  name?: string;
}

export interface User {
  /**
   * @format int64
   * @example 10
   */
  id?: number;
  /** @example "theUser" */
  username?: string;
  /** @example "John" */
  firstName?: string;
  /** @example "James" */
  lastName?: string;
  /** @example "john@email.com" */
  email?: string;
  /** @example 12345 */
  password?: string;
  /** @example 12345 */
  phone?: string;
  /**
   * User Status
   * @format int32
   * @example 1
   */
  userStatus?: number;
}

export interface Tag {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface Pet {
  /**
   * @format int64
   * @example 10
   */
  id?: number;
  /** @example "doggie" */
  name: string;
  category?: Category;
  photoUrls: string[];
  tags?: Tag[];
  /** pet status in the store */
  status?: 'available' | 'pending' | 'sold';
}

export interface ApiResponse {
  /** @format int32 */
  code?: number;
  type?: string;
  message?: string;
}

export namespace Pet {
  /**
   * @description Add a new pet to the store
   * @tags pet
   * @name AddPet
   * @summary Add a new pet to the store
   * @request POST:/pet
   * @secure
   */
  export namespace AddPet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Pet;
    export type RequestHeaders = {};
    export type ResponseBody = Pet;
  }
  /**
   * @description Update an existing pet by Id
   * @tags pet
   * @name UpdatePet
   * @summary Update an existing pet
   * @request PUT:/pet
   * @secure
   */
  export namespace UpdatePet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Pet;
    export type RequestHeaders = {};
    export type ResponseBody = Pet;
  }
  /**
   * @description Multiple status values can be provided with comma separated strings
   * @tags pet
   * @name FindPetsByStatus
   * @summary Finds Pets by status
   * @request GET:/pet/findByStatus
   * @secure
   */
  export namespace FindPetsByStatus {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Status values that need to be considered for filter
       * @default "available"
       */
      status?: 'available' | 'pending' | 'sold';
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Pet[];
  }
  /**
   * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   * @tags pet
   * @name FindPetsByTags
   * @summary Finds Pets by tags
   * @request GET:/pet/findByTags
   * @secure
   */
  export namespace FindPetsByTags {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Tags to filter by */
      tags?: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Pet[];
  }
  /**
   * @description Returns a single pet
   * @tags pet
   * @name GetPetById
   * @summary Find pet by ID
   * @request GET:/pet/{petId}
   * @secure
   */
  export namespace GetPetById {
    export type RequestParams = {
      /**
       * ID of pet to return
       * @format int64
       */
      petId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Pet;
  }
  /**
   * No description
   * @tags pet
   * @name UpdatePetWithForm
   * @summary Updates a pet in the store with form data
   * @request POST:/pet/{petId}
   * @secure
   */
  export namespace UpdatePetWithForm {
    export type RequestParams = {
      /**
       * ID of pet that needs to be updated
       * @format int64
       */
      petId: number;
    };
    export type RequestQuery = {
      /** Name of pet that needs to be updated */
      name?: string;
      /** Status of pet that needs to be updated */
      status?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags pet
   * @name DeletePet
   * @summary Deletes a pet
   * @request DELETE:/pet/{petId}
   * @secure
   */
  export namespace DeletePet {
    export type RequestParams = {
      /**
       * Pet id to delete
       * @format int64
       */
      petId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      api_key?: string;
    };
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags pet
   * @name UploadFile
   * @summary uploads an image
   * @request POST:/pet/{petId}/uploadImage
   * @secure
   */
  export namespace UploadFile {
    export type RequestParams = {
      /**
       * ID of pet to update
       * @format int64
       */
      petId: number;
    };
    export type RequestQuery = {
      /** Additional Metadata */
      additionalMetadata?: string;
    };
    export type RequestBody = File;
    export type RequestHeaders = {};
    export type ResponseBody = ApiResponse;
  }
}

export namespace Store {
  /**
   * @description Returns a map of status codes to quantities
   * @tags store
   * @name GetInventory
   * @summary Returns pet inventories by status
   * @request GET:/store/inventory
   * @secure
   */
  export namespace GetInventory {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Record<string, number>;
  }
  /**
   * @description Place a new order in the store
   * @tags store
   * @name PlaceOrder
   * @summary Place an order for a pet
   * @request POST:/store/order
   */
  export namespace PlaceOrder {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Order;
    export type RequestHeaders = {};
    export type ResponseBody = Order;
  }
  /**
   * @description For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   * @tags store
   * @name GetOrderById
   * @summary Find purchase order by ID
   * @request GET:/store/order/{orderId}
   */
  export namespace GetOrderById {
    export type RequestParams = {
      /**
       * ID of order that needs to be fetched
       * @format int64
       */
      orderId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Order;
  }
  /**
   * @description For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
   * @tags store
   * @name DeleteOrder
   * @summary Delete purchase order by ID
   * @request DELETE:/store/order/{orderId}
   */
  export namespace DeleteOrder {
    export type RequestParams = {
      /**
       * ID of the order that needs to be deleted
       * @format int64
       */
      orderId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace User {
  /**
   * @description This can only be done by the logged in user.
   * @tags user
   * @name CreateUser
   * @summary Create user
   * @request POST:/user
   */
  export namespace CreateUser {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = User;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * @description Creates list of users with given input array
   * @tags user
   * @name CreateUsersWithListInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithList
   */
  export namespace CreateUsersWithListInput {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = User[];
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }
  /**
   * No description
   * @tags user
   * @name LoginUser
   * @summary Logs user into the system
   * @request GET:/user/login
   */
  export namespace LoginUser {
    export type RequestParams = {};
    export type RequestQuery = {
      /** The user name for login */
      username?: string;
      /** The password for login in clear text */
      password?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @tags user
   * @name LogoutUser
   * @summary Logs out current logged in user session
   * @request GET:/user/logout
   */
  export namespace LogoutUser {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags user
   * @name GetUserByName
   * @summary Get user by user name
   * @request GET:/user/{username}
   */
  export namespace GetUserByName {
    export type RequestParams = {
      /** The name that needs to be fetched. Use user1 for testing.  */
      username: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }
  /**
   * @description This can only be done by the logged in user.
   * @tags user
   * @name UpdateUser
   * @summary Update user
   * @request PUT:/user/{username}
   */
  export namespace UpdateUser {
    export type RequestParams = {
      /** name that needs to be updated */
      username: string;
    };
    export type RequestQuery = {};
    export type RequestBody = User;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * @description This can only be done by the logged in user.
   * @tags user
   * @name DeleteUser
   * @summary Delete user
   * @request DELETE:/user/{username}
   */
  export namespace DeleteUser {
    export type RequestParams = {
      /** The name that needs to be deleted */
      username: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}
