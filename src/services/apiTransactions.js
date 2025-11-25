import supabase from "./supabase";

export async function getTransactions() {
  const { data, error } = await supabase.from("transaction").select("*");

  if (error) throw new Error("Transactions could not be loaded");

  return data;
}
