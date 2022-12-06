import {useEffect, useState} from "react";

export default function useWindow(){
  const [gWindow, setGWindow] = useState<Window | null>(null)
  useEffect(() => {
    setGWindow(window)
  }, [])

  return gWindow
}
