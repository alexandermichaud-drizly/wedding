export enum Entrees {
  Chicken = 1,
  Steak,
  'Other (Vegetarian, Vegan, Gluten-Free)',
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
