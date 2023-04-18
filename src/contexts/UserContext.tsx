import React, { ReactNode, useEffect, useState,useCallback } from "react";
import { api } from "../lib/axios";


interface Issue {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
  
}

interface Item {
  id: number;
  url: string;
  body: string;
  title: string;
  user: User;
}

interface UserContextData{
  issues: Issue;
  user: User;
  fetchIssues: (search: string) => Promise<void>;
}

interface User {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
  name: string;
  company: string;
  bio: string;
  location: string;
  followers: number;
  html_url: string;
}

export const UserContext = React.createContext({} as UserContextData);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [issues, setIssues] = useState<Issue>({} as Issue);
  const [user, setUser] = useState<User>({} as User);

  const fetchUser = useCallback( async (user: string) => {
    const response = await api.get(`users/${user}`);
    const data = response.data;
    setUser(data);
  },[user]);

  const fetchIssues = useCallback(async (search?: string) => {{
    const response = await api.get(`search/issues?q=${search}repo:d1d1o/Github-Blog`);
    //const response = await api.get(`search/issues?q=repo:d1d1o/Github-Blog`);

    const data = response.data;
    console.log(data);
    setIssues(data);
  }},[issues]);

  useEffect(()=>{
    //fetchIssues('a');
    fetchUser('d1d1o');
  },[]);


  return (
    <UserContext.Provider value={{ issues,user,fetchIssues}}>
      {children}
    </UserContext.Provider>
  );
}