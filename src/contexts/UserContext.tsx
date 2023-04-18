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
  html_url: string;
  created_at: string;
}

interface UserContextData{
  issues: Issue;
  user: User;
  post: fillPostProps;
  fetchIssues: (search: string) => Promise<void>;
  fillPost: (value?:any) => Promise<void>;
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
interface fillPostProps {
  title?: string;
  body?: string;
  html_url?: string;
}

export const UserContext = React.createContext({} as UserContextData);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [login, setLogin] = useState<string>('d1d1o');
  const [repo, setRepo] = useState<string>('Github-Blog');
  const [issues, setIssues] = useState<Issue>({} as Issue);
  const [user, setUser] = useState<User>({} as User);
  const [post, setPost] = useState<fillPostProps>({} as fillPostProps);

  const fetchUser = useCallback( async (user: string) => {
    const response = await api.get(`users/${user}`);
    const data = response.data;
    setUser(data);
  },[user]);

  const fetchIssues = useCallback(async (search?: string) => {{
    const response = await api.get(`search/issues?q=${search} repo:${login}/${repo}`);
    const data = response.data;
    setIssues(data);
  }},[issues]);

  const fillPost = useCallback( async (value:fillPostProps) => {
   await setPost(value);
  },[]);


  useEffect(()=>{
    fetchIssues('');
    fetchUser(login);
  },[]);

  return (
    <UserContext.Provider 
      value={{ 
        issues,
        user,
        post,
        fetchIssues,
        fillPost
      }}>
      {children}
    </UserContext.Provider>
  );
}