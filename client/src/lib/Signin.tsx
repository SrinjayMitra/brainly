import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SignInUser } from './utils';


const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  //@ts-ignore
  const [error, setError] = useState<string | null>(null);
    //@ts-ignore
  const [success, setSuccess] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    setError(null);
    setSuccess(false);
    setErrorMessage('');
    setSuccessMessage('');
    
    if (!email || !password) {
      setErrorMessage('Both fields are required.');
      return;
    }
    
    // Call SignInUser function
    const result = await SignInUser({ email, password });
    console.log('Backend Response:', result);
    
    if (result.message === "User signed in successfully") {
      setSuccess(true);
      setSuccessMessage(result.message);
      console.log('Redirecting to dashboard...'); // Success message
      setTimeout(() => {
        navigate("/dashboard"); // Redirect to dashboard after a short delay to show the success message
      }, 500); // Delay to allow the alert to be visible for a moment
    } else {
      setError("Sign-in failed");
      setErrorMessage(result.message); // Error message
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        
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
            handleSignIn();
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

          <div className="mb-6">
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

          <Button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
