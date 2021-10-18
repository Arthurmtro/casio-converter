import { createContext, useState, useMemo, Dispatch } from "react"

export const UserInput = createContext({
  userInput: "awd",
  setUserInput: (props: string) => "",
})

export default function UserInputProvider({ children }: any) {
  const [userInput, setUserInput] = useState("")

  const value: any = useMemo(() => ({ userInput, setUserInput }), [userInput])
  return <UserInput.Provider value={value}>{children}</UserInput.Provider>
}
