
export interface Dish {
  name: string;
  summary: string;
  description: string;
  category: string;
  image: string;
}

export interface Cuisine {
  name: string;
  emoji: string;
  image: string;
  description: string;
  categories: string[];
  dishes: Dish[];
}