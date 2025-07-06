import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { post } from "../../Utils/Api";
import toast from "react-hot-toast";
import styled from "styled-components";

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f7fa;
  padding: 20px;
`;

const RegisterForm = styled.form`
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 420px;
  transition: all 0.3s ease;
`;

const FormTitle = styled.h2`
  color: #2d3748;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 600;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  margin-bottom: 1.25rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.9375rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
  }
  
  &::placeholder {
    color: #a0aec0;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #4338ca;
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  &:disabled {
    background-color: #cbd5e0;
    cursor: not-allowed;
  }
`;

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role] = useState("student");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Submitting registration with:", { name, email, password, role });

    try {
      const request = await post("/api/auth/signup", { name, email, password, role });
      console.log("Registration response:", request);
      const response = request.data;

      toast.success(response.message || "Registration successful!");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Registration Error:", error);
      console.error("Error response:", error.response);
      toast.error(error.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <FormTitle>Create an Account</FormTitle>
        
        <InputField 
          placeholder="Full Name" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
          required
        />
        
        <InputField 
          placeholder="Email Address" 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        
        <InputField 
          placeholder="Password" 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          minLength="6"
          required
        />
        
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </SubmitButton>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;