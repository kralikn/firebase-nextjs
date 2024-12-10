'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { deleteData } from "@/utils/actions"

export default function NoteCard({ note }) {

  const handleSubmit = async (note) => {
    const data = await deleteData(note)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{note.content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={() => handleSubmit(note)}
        >
          Törlés
        </Button>
      </CardFooter>
    </Card>
  )
}
