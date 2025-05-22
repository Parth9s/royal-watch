import React from 'react';
import { useAuth } from '../context/AuthContext';
import ProfileDashboard from './ProfileDashboard';
import AuthPrompt from './AuthPrompt';

export default function ProfileWrapper() {
  const { currentUser } = useAuth();

  return currentUser ? <ProfileDashboard /> : <AuthPrompt />;
} 