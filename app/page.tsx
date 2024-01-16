import Constructivism from '@/components/constructivism'
import Window from '@/components/window'

export default function Home({
  searchParams,
}: {
  searchParams: { open?: string }
}) {
  return (
    <main>
      <Constructivism />
      <Window open={searchParams.open} />
    </main>
  )
}
