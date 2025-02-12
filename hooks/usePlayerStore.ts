import {create} from "zustand";

interface PlayerStore {
    ids: string[];
    activeId?: string;
    setId: (id: string) => void;
    setIds: (ids: string[]) => void;
    reset: () => void;
    // isPlaying: boolean;
    // setIsPlaying: () => void;
}

const usePlayerStore = create<PlayerStore>((set) => ({
    ids: [],
    activeId: undefined,
    setId: (id: string) => set({
        activeId: id
    }),
    setIds: (ids: string[]) => set({ ids: ids }),
    reset: () => set({ ids: [], activeId: undefined }),
    // isPlaying: true,
    // setIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying})),
}))

export default usePlayerStore;