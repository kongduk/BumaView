import Customapi from "@/lib/api";

// Dummy Data for testing
const dummyReviews = [
  {
    review_id: 1,
    question_id: 1,
    user_id: 1,
    review_text: "This was a great question!",
    rating: 5,
    model_config: { from_attributes: true }
  },
  {
    review_id: 2,
    question_id: 2,
    user_id: 2,
    review_text: "This question was a bit too easy.",
    rating: 3,
    model_config: { from_attributes: true }
  }
];

// API Functions
export const fetchReviews = async () => {
  try {
    const response = await Customapi.get("/interview-review/");
    return response.data;
  } catch (error) {
    console.error("Error fetching reviews from API, returning dummy data:", error);
    return dummyReviews;
  }
};

export const fetchReviewDetails = async (id) => {
  try {
    const response = await Customapi.get(`/interview-review/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching review details for ID ${id} from API, returning dummy data:`, error);
    return dummyReviews.find(r => r.review_id === parseInt(id)) || null;
  }
};

export const addReview = async (newReview) => {
  const response = await Customapi.post("/interview-review/", newReview);
  return response.data;
};

export const updateReview = async ({ id, ...updatedReview }) => {
    try {
      const response = await Customapi.put(`/interview-review/${id}`, updatedReview);
      return response.data;
    } catch (error) {
      console.error(`Error updating review with ID ${id}, using dummy data logic:`, error);
      const index = dummyReviews.findIndex(r => r.review_id === parseInt(id));
      if (index !== -1) {
        dummyReviews[index] = { ...dummyReviews[index], ...updatedReview };
        return dummyReviews[index];
      }
      return null;
    }
  };
