import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../services/apiTransactions";

export function useTransactions() {
  const { isPending, data, error } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

  return { isPending, data, error };
}
