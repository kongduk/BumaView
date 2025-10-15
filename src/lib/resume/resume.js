import Customapi from "@/lib/api";

// Dummy Data for testing
const dummyResumes = [
  {
    application_id: 1,
    user_id: 1,
    company_id: 101,
    occupation_id: "Web",
    path: "/path/to/resume1.pdf",
    original_file_name: "resume1.pdf",
    content_type: "application/pdf",
    is_shared: true,
    created_at: "2024-01-01T12:00:00Z"
  },
  {
    application_id: 2,
    user_id: 1,
    company_id: 102,
    occupation_id: "Ai",
    path: "/path/to/resume2.pdf",
    original_file_name: "resume2.pdf",
    content_type: "application/pdf",
    is_shared: false,
    created_at: "2024-01-02T12:00:00Z"
  },
  {
    application_id: 3,
    user_id: 2,
    company_id: 103,
    occupation_id: "Security",
    path: "/path/to/resume3.pdf",
    original_file_name: "resume3.pdf",
    content_type: "application/pdf",
    is_shared: true,
    created_at: "2.24-01-03T12:00:00Z"
  }
];

// API Functions
export const fetchResumes = async () => {
  try {
    const response = await Customapi.get("/application-form/");
    return response.data;
  } catch (error) {
    console.error("Error fetching resumes from API, returning dummy data:", error);
    return dummyResumes;
  }
};

export const fetchResumeDetails = async (id) => {
  try {
    const response = await Customapi.get(`/application-form/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching resume details for ID ${id} from API, returning dummy data:`, error);
    return dummyResumes.find(r => r.application_id === parseInt(id)) || null;
  }
};

export const fetchMyResumes = async (userId) => {
    try {
      const response = await Customapi.get(`/application-form/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching resumes for user ID ${userId} from API, returning dummy data:`, error);
      return dummyResumes.filter(r => r.user_id === parseInt(userId));
    }
  };

export const addResume = async (newResume) => {
  const response = await Customapi.post("/application-form/", newResume);
  return response.data;
};

export const updateResume = async ({ id, ...updatedResume }) => {
    try {
      const response = await Customapi.put(`/application-form/${id}`, updatedResume);
      return response.data;
    } catch (error) {
      console.error(`Error updating resume with ID ${id}, using dummy data logic:`, error);
      const index = dummyResumes.findIndex(r => r.application_id === parseInt(id));
      if (index !== -1) {
        dummyResumes[index] = { ...dummyResumes[index], ...updatedResume };
        return dummyResumes[index];
      }
      return null;
    }
  };

export const deleteResume = async (id) => {
  const response = await Customapi.delete(`/application-form/${id}`);
  return response.data;
};