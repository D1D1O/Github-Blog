import React, { ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";


interface Issue {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
  
}

interface Item {
  url: string;
  body: string;
  title: string;
  user: User;
}

interface UserContextData{
  issues: Issue;
  user: User;
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

  const fetchUser = async (user: string) => {
    const response = await api.get(`users/${user}`);
    const data = response.data;
    setUser(data);
  }

  // const fetchIssues = async (search: string) => {
  //   const response = await api.get(`search/issues?q=${search}repo:d1d1o/Github-Blog`);
  //   const data = response.data;
  //   setIssues(data);
  // }

  useEffect(()=>{
    fetchUser('d1d1o');
    // fetchIssues('a');
  },[]);


  return (
    <UserContext.Provider value={{ issues,user}}>
      {children}
    </UserContext.Provider>
  );
}