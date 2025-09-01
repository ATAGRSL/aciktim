
export interface MenuItem {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  imageUrl: string;
}

export interface Branch {
  id: number;
  city: string;
  name: string;
  address: string;
}

export interface Recommendation {
  name: string;
  reason: string;
}

export interface RecommendationResponse {
  recommendations: Recommendation[];
}
