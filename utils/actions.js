'use server'

import { createClient } from "./supabase/server";
import { revalidatePath } from 'next/cache'

export async function getData() {
  try {

    const supabase = await createClient()
    const { data, error } = await supabase
      .from('azure_table')
      .select()

    if (error) {
      console.log(error)
      return { error: `code: ${error.code} / message: ${error.message}` }
    }
    return { data }
  } catch (error) {
    console.error(error)
    return { error: 'Valami hiba történt...' }
  }
}
export async function createData(values) {

  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('azure_table')
      .insert(values)
      .select()

    if (!data) {
      console.log(error)
      return { error: 'Nem sikerült menteni a jegyzetet!' }
    }
    return { data }
  } catch (error) {
    console.error(error)
    return { error: 'Valami hiba történt...' }
  }
}
export async function deleteData(values) {

  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('azure_table')
      .delete()
      .eq('id', values.id)
      .select()

    if (!data) {
      console.log(error)
      return { error: 'Nem sikerült menteni a jegyzetet!' }
    }
    revalidatePath('/get')
    return { data }
  } catch (error) {
    console.error(error)
    return { error: 'Valami hiba történt...' }
  }
}