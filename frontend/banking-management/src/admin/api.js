import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export const fetchCustomerCount = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/admin/customer-count`);
    return response.data;
  } catch (error) {
    console.error('Error fetching customer count:', error);
    throw error;
  }
};

export const fetchBranchCount = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/admin/branch-count`);
    return response.data;
  } catch (error) {
    console.error('Error fetching branch count:', error);
    throw error;
  }
};

export const createCustomer = async (customerData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/admin/customer`, customerData);
    return response.data;
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
};

export const fetchAllCustomers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/admin/customers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }
};

export const createAccount = async (accountData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/admin/account`, accountData);
    return response.data;
  } catch (error) {
    console.error('Error creating account:', error);
    throw error;
  }
};

export const fetchAllAccounts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/admin/accounts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching accounts:', error);
    throw error;
  }
};

export const fetchCustomerById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/admin/customer/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching customer with ID ${id}:`, error);
    throw error;
  }
};

export const deleteCustomerById = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/api/admin/customer/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting customer with ID ${id}:`, error);
    throw error;
  }
};

export const deleteAccountById = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/api/admin/account/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting account with ID ${id}:`, error);
    throw error;
  }
};
