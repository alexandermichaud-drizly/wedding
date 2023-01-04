export enum Entrees {
  Chicken = 1,
  Steak,
  Other,
}

export enum DietaryRestrictions {
  VEGETARIAN = 'Vegetarian',
  VEGAN = 'Vegan',
  GLUTEN_FREE = 'Gluten Free',
}

export type DietaryRestrictionsType = Record<
  DietaryRestrictions,
  boolean | null
>;

export type MealPreferenceFormData = {
  meal: Entrees | null;
  dietaryRestrictions: DietaryRestrictionsType;
  allergies?: string;
};
