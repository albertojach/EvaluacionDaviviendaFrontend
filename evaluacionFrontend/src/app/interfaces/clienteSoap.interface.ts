export interface FindPersonInterface {
    findPersonResult: FindPersonResult;
  }
  export interface FindPersonResult {
    name: string;
    ssn: string;
    dob: string;
    home: HomeOrOffice;
    office: HomeOrOffice;
    spouse?: null;
    favoriteColors?: FavoriteColors;
    age: number;
  }
  export interface HomeOrOffice {
    street: string;
    city: string;
    state: string;
    zip: string;
  }
  export interface FavoriteColors {
    favoriteColorsItem?: (string)[] | null;
  }
  