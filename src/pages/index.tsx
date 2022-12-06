import React from "react";
import DefaultLayout from "../layouts/default-layout/DefaultLayout";
import NavigationHeader from "../components/app/navigation-header/NavigationHeader";
import MobileNavigation from "../components/app/mobile-navigation/MobileNavigation";

export default function IndexPage () {
  return (
    <DefaultLayout>
      <NavigationHeader />
      <MobileNavigation />
    </DefaultLayout>
  )
}
