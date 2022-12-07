import React from "react";
import DefaultLayout, {TDefaultLayoutProps} from "../default-layout/DefaultLayout";
import NavigationHeader from "../../components/app/navigation-header/NavigationHeader";
import MobileNavigation from "../../components/app/mobile-navigation/MobileNavigation";

export default function PageLayout(props: TDefaultLayoutProps) {
  return (
    <DefaultLayout>
      <NavigationHeader />
      <MobileNavigation />
      { props.children }
    </DefaultLayout>
  )
}
