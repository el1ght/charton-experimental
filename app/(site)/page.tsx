import UserDataLayout from "@/components/UserDataLayout";

const mockSongs = [
  {
    id: '1',
    user_id: '42545235',
    author: 'Arctic Monkeys',
    title: 'Arabella',
    image_path: 'string'
  },
  {
    id: '2',
    user_id: '52452355',
    author: 'Arctic Monkeys',
    title: '505',
    image_path: 'string'
  },
]

export default function Home() {
  return (
      <UserDataLayout songs={mockSongs} />
  );
}
