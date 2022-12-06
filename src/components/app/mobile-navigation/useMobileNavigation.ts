import useWindow from "../../../hooks/useWindow";
import {useEffect, useRef, useState} from "react";

export default function useMobileNavigation() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
  const hasMountedRef = useRef(false)
  const gWindow = useWindow()

  function handleMobileNav () {
    document.body.classList.toggle('navigation-active')
    setIsNavigationOpen((value) => !value)
  }

  useEffect(() => {
    if (!gWindow || hasMountedRef.current) return
    gWindow.addEventListener('mobileNav', handleMobileNav)
    hasMountedRef.current = true
  }, [gWindow])

  return { isNavigationOpen }
}
