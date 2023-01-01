export enum Meals {
  CHICKEN = 1,
  STEAK,
  OTHER,
}

export enum DietaryRestrictions {
  VEGETARIAN = 1,
  VEGAN,
  GLUTEN_FREE,
}

export type DietaryRestrictionsType = Record<DietaryRestrictions, boolean>;
