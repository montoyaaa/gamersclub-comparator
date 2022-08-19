import { useQuery } from "react-query";
import api from "../services/api";
import { User } from "../utils/types/user.type";

const fetchUsers = async () => {
  const { data } = await api.get("/users");
  return data as User[];
};

export const useFetchUsers = () => {
  return useQuery("users", fetchUsers, { refetchOnWindowFocus: false });
};

// TODO: Gamersclub comparator - Comparar os perfis
// TODO: Sugerir recentes quando estiver sem comparação
// TODO: Web Scraping para obter os dados dos perfis na busca
