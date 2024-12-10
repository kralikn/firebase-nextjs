
export const dynamic = "force-dynamic"

import NoteCard from "@/components/note-card"
import { getData } from "@/utils/actions"

export default async function GetPage() {

  const { data } = await getData()

  const topics = data || []
  const error = data?.error || ''

  if (error) {
    return <p className="text-md w-1/2 mx-auto px-8 py-4">{error}</p>
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      <div>
        <h1 className="text-2xl text-center">Lekérdezés</h1>
      </div>
      <div className="flex flex-col gap-6 w-1/2">
        {data.map(note => {
          return (
            <NoteCard key={note.id} note={note} />
          )
        })}
      </div>
    </div>
  )
}
