import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { create } from 'zustand';

// Create a store for global state
const useStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  isAuthenticated: false,
  setIsAuthenticated: (status) => set({ isAuthenticated: status }),
}));

// Pages
const Home = () => <div>Trang chủ</div>;
const Login = () => <div>Đăng nhập</div>;
const Register = () => <div>Đăng ký</div>;
const VoiceCloning = () => <div>Nhân bản giọng nói</div>;
const Library = () => <div>Thư viện sách</div>;
const Player = () => <div>Trình phát</div>;
const Profile = () => <div>Hồ sơ</div>;
const About = () => <div>Giới thiệu</div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold">NHÓM KÍNH CẦN</span>
              <span className="ml-2 text-pink-500 font-serif">Thân Thanh Audiobook</span>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-pink-300">Trang chủ</a></li>
                <li><a href="/library" className="hover:text-pink-300">Thư viện</a></li>
                <li><a href="/about" className="hover:text-pink-300">Giới thiệu</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/voice-cloning" element={<VoiceCloning />} />
            <Route path="/library" element={<Library />} />
            <Route path="/player" element={<Player />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="bg-gray-100 p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>© 2024 Thân Thanh Audiobook. Tất cả quyền được bảo lưu.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App; 