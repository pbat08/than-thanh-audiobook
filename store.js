import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user }),
      setIsAuthenticated: (status) => set({ isAuthenticated: status }),
      logout: () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        set({ user: null, isAuthenticated: false });
      },
      // Voice cloning state
      voiceSamples: [],
      setVoiceSamples: (samples) => set({ voiceSamples: samples }),
      // Audio player state
      currentBook: null,
      currentChapter: 0,
      isPlaying: false,
      setCurrentBook: (book) => set({ currentBook: book }),
      setCurrentChapter: (chapter) => set({ currentChapter: chapter }),
      setIsPlaying: (status) => set({ isPlaying: status }),
      // Library state
      favorites: [],
      setFavorites: (favorites) => set({ favorites }),
      addToFavorites: (book) => 
        set((state) => ({ 
          favorites: [...state.favorites, book] 
        })),
      removeFromFavorites: (bookId) =>
        set((state) => ({
          favorites: state.favorites.filter((book) => book.id !== bookId)
        })),
    }),
    {
      name: 'than-thanh-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        favorites: state.favorites,
      }),
    }
  )
);

export default useStore; 