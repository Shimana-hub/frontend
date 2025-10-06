import api from "./api";

export interface TokenResponse {
  access: string;
  refresh?: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface ApiError {
  message: string;
  status?: number;
}

// Enhanced error handler
function handleApiError(error: any): never {
  console.error('API Error:', error);
  
  const message = 
    error.response?.data?.message ||
    error.response?.data?.detail ||
    error.response?.data?.error ||
    error.message ||
    "An unexpected error occurred";
  
  const enhancedError: ApiError = {
    message,
    status: error.response?.status
  };
  
  throw enhancedError;
}

// Register client
export async function registerClient(data: RegisterData) {
  try {
    const response = await api.post("/auth/register/", { ...data, role: "client" });
    return response.data;
  } catch (error: any) {
    return handleApiError(error);
  }
}

// Register serviceman
export async function registerServiceman(data: RegisterData) {
  try {
    const response = await api.post("/auth/register/", { ...data, role: "serviceman" });
    return response.data;
  } catch (error: any) {
    return handleApiError(error);
  }
}

// Login
export async function login(data: { email: string; password: string }) {
  try {
    const res = await api.post("/auth/login/", data);
    const { access, refresh } = res.data;
    
    if (access) {
      localStorage.setItem("accessToken", access);
    }
    if (refresh) {
      localStorage.setItem("refreshToken", refresh);
    }
    
    return res.data;
  } catch (error: any) {
    return handleApiError(error);
  }
}

// Refresh token
export async function refresh(): Promise<TokenResponse | null> {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) return null;

    const res = await api.post<TokenResponse>("/auth/refresh/", { refresh: refreshToken });
    const tokens = res.data;

    localStorage.setItem("accessToken", tokens.access);
    if (tokens.refresh) {
      localStorage.setItem("refreshToken", tokens.refresh);
    }

    return tokens;
  } catch (error: any) {
    // On refresh failure, clear tokens and redirect to login
    logout();
    window.location.href = '/auth/login';
    return null;
  }
}

// Logout
export function logout() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
}

// Utility function to check if user is authenticated
export function isAuthenticated(): boolean {
  return !!localStorage.getItem("accessToken");
}

// Utility function to get access token
export function getAccessToken(): string | null {
  return localStorage.getItem("accessToken");
}