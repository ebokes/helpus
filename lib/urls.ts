export const baseUrl = "https://helpus-xdqm.onrender.com/api";
// export const baseUrl = process.env.BACKEND_URL;

const urls = {
  // Auth
  register: `${baseUrl}/Auth/register`,
  login: `${baseUrl}/Auth/login`,

  // Donation
  donate: `${baseUrl}/Donation/donate`,
  verifyPayment: `${baseUrl}/Donation/verify-payment`,
  getUserDonations: `${baseUrl}/Donation/get-user-donations`,

  // Project
  createProject: `${baseUrl}/Project/create`,
  editProject: `${baseUrl}/Project/edit`,
  getAllProject: `${baseUrl}/Project/getall`,
  getProject: (id: string) => `${baseUrl}/Project/get/${id}`,
  deleteProject: `${baseUrl}/Project/delete`,
};
export default urls;
