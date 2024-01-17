import Constructivism from '@/components/constructivism'
import Logotype from '@/components/logotype'
import Window from '@/components/window'

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-y-auto">
      <Logotype />
      <Constructivism />
      <Window />
    </main>
  )
}
