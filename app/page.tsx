import Constructivism from '@/components/constructivism'
import Logotype from '@/components/logotype'
import Window from '@/components/window'

export default function Home({
  searchParams,
}: {
  searchParams: { open?: string }
}) {
  return (
    <main className="overflow-hidden">
      <Logotype />
      <Constructivism />
      <Window open={searchParams.open} />
    </main>
  )
}
