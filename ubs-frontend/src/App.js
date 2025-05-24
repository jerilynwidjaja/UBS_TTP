import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import UserPreferencesModal from './components/UserPreferencesModal';
import Profile from './components/Profile';
import HomePage from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/modal"
          element={
            <UserPreferencesModal
              isOpen={true}
              onRequestClose={() => {}}
              onSave={() => {}}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
