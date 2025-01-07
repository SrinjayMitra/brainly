import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useNavigate } from 'react-router-dom';  // Importing useNavigate for redirection
import { SignUpUser } from './utils'; // Assuming this is the function to handle the signup API call

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  //@ts-ignore
  const [error, setError] = useState<string | null>(null);
  //@ts-ignore
  const [success, setSuccess] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();  // Initialize navigate hook

  const handleSignUp = async () => {
    setError(null);
    setSuccess(false);
    setSuccessMessage('');
    setErrorMessage('');

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    if (!email || !password) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      const result = await SignUpUser({ email, password });
      if (result.message === "User signed up successfully") {
        setSuccess(true);
        setSuccessMessage("Account created successfully!");
        // Redirect to login page or another page
        setTimeout(() => {
          navigate("/signin"); // Example redirection to login page after successful sign up
        }, 1000);  // Redirect with a small delay to show success message
      } else {
        setError("User already exists");
        setErrorMessage(result.message || "Sign up failed.");
      }
    } catch (error) {
      console.error('Sign-up failed:', error);
      setError("Sign-up error");
      setErrorMessage('An error occurred while signing up.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        
        {errorMessage && (
          <Alert>
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

        {successMessage && (
          <Alert>
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>{successMessage}</AlertDescription>
          </Alert>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Confirm your password"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-500 transition"
          >
            Sign Up
          </Button>
        </form>

        {/* Link to Sign In page if user already exists */}
        {errorMessage && errorMessage === "User already exists. Please sign in." && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/signin" className="text-blue-600 hover:underline">
                Sign in here
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
