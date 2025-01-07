import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();
export const BACKENDURL = "http://localhost:3000/api/v1";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function SignUpUser({
  email,
  password,
}
: {
  email: string; // Use lowercase `string` for TypeScript types
  password: string;
}
) 
{
  // Defining the signup function
    try {
      console.log("hi");
      
      const response = await axios.post(`${BACKENDURL}/signup`, {
        userName: email, // Assuming your backend expects `username` for the email field
        password: password
      });
      console.log(`${BACKENDURL}/signup`);
      console.log('Signup successful:', response.data);
      return response.data; // Return response data for further handling
    } catch (error: any) {
      // Enhanced error handling
      if (error.response) {
        // Backend returned a response with an error
        if (error.response.status === 411) {
          return { success: false, message: "User already exists. Please sign in." };
        }
        // Other error responses from backend
        return { success: false, message: error.response.data?.message || "Signup failed. Please try again later." };
      } else if (error.request) {
        // No response received from backend (network-related issue)
        return { success: false, message: "Network error. Please try again later." };
      } else {
        // Some other error occurred during the setup of the request
        return { success: false, message: `Unexpected error: ${error.message}` };
      }
    }
  };
// async function check() {
//   try {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")

//     console.log('Signup successful:', response);
//     return response; // Return response data for further handling
//   } catch (error) {
//     console.error('Signup failed:', error.response || error.message);
//     throw error; // Re-throw the error for the caller to handle
//   }
// }
export async function call(){

  console.log("Calling SignUpUser...");
  try {
    await SignUpUser({ email: "9", password: "9" });
  } catch (error) {
    console.error("Error during signup:", error);
  }
}

export async function SignInUser({
  email,
  password,
}
: {
  email: string; // Use lowercase `string` for TypeScript types
  password: string;
}
) 
{
  // Defining the signup function
    try {
      console.log("hi");
      
      const response = await axios.post(`${BACKENDURL}/signin`, {
        userName: email, // Assuming your backend expects `username` for the email field
        password: password
      });
      const jwt = response.data.token;
      localStorage.setItem("token",jwt);
      // navigate("/dashboard");
      console.log(`${BACKENDURL}/signin`);
      console.log('Signup successful:', response.data);
      return response.data; // Return response data for further handling
    } catch (error:any) {
      if (error.response) {
        if (error.response.status === 404) {
          return { success: false, message: "User not found. Please check your credentials." };
        } else if (error.response.status === 401) {
          return { success: false, message: "Please check your password." };
        } else {
          return { success: false, message: `Error: ${error.response.status} - ${error.response.statusText}` };
        }
      } else {
        return { success: false, message: "Network error. Please try again later." };
      }
    }
// Execute the signup function immediately
}




export async function addContent({
  title,
  description,
  type,
  link,
  tags
}: {
  title: string;
  description: string;
  type: string;
  link: string;
  tags: string[];
}) {
  try {
    
    const response = await axios.post(
      `${BACKENDURL}/content`,
      {
        title,
        description,
        type,
        link,
        tags
      },
      {
        headers: {
          "Authorization": localStorage.getItem("token"),
        },
      }
    );

    console.log("Content added successfully:", response.data);
    return response.data; // Return the response data for further use
  } catch (error: any) {
    console.error("Error adding content:", error.response?.data || error.message);
    throw error; // Re-throw the error for handling in the caller function
  }finally{
    window.location.reload();
  }
}

