import Constructivism from '@/components/constructivism'
import Logotype from '@/components/logotype'
import Window from '@/components/window'

export default function Home() {
  return (
    <main className="h-svh overflow-y-auto">
      <Logotype />
      <Constructivism />
      <Window />
    </main>
  )
}
