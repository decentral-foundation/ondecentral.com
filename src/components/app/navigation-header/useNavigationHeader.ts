import useWindow from "../../../hooks/useWindow";
import {useState} from "react";

export const navigationItems = [
  { id: 1, name: 'Home', path: '/'},
  { id: 2, name: 'Startups', path: '/startups'},
  { id: 3, name: 'VCs', path: '/vc'},
  { id: 4, name: 'Content Creators', path: '/vc'},
  { id: 5, name: 'About', path: '/vc'},
  { id: 6, name: 'Contact', path: '/vc'},
]
const mobileNavigationEvent = new Event('mobileNav')

export function useNavigationHeader () {
  const gWindow  = useWindow()
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)

  function openMobileNavigation () {
    setIsNavigationOpen((value) => !value)
    dispatchEvent(mobileNavigationEvent)
  }

  return { gWindow, openMobileNavigation, isNavigationOpen }
}
