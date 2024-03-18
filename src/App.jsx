import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataBindingComponents from './Components/DataBinding/DataBindingComponents'
import CollectionBinding from './Components/DataBinding/CollectionBinding'
import TableBinding from './Components/DataBinding/TableBinding'
import NestedDinding from './Components/DataBinding/NestedBinding'
import NasaApi from './Components/Hooks/NasaApi'
import FakeStoreApi from './Components/Hooks/FakeStoreApi'
import EventBinding from './Components/TwoWayBinding/EventBinding'
import HandleForm from './Components/TwoWayBinding/HandleForm'
import DarkMode from './Components/DarkModeLightMode/DarkMode'
import Prop1 from './Components/PropDrilling/Prop1'
import FormsValidation from './Components/Validation/FormsValidation'
import Formik from './Components/Validation/Formik'
import FormikValidation from './Components/Validation/FormikValidation'
import FormikYupValidation from './Components/Validation/FormikYupValidation'
import ComponentsLifeCycle from './Components/Hooks/ComponentsLifeCycle'
import UseContext from './Components/Hooks/UseContext'
import UseReducer from './Components/Hooks/useReducer'
import LikeDisLike from './Components/Hooks/LikeDisLike'
import JqueryAjax from './Components/API_Request/JqueryAjax'
import AxiosDemo from './Components/API_Request/AxiosDemo'
import ShoppingIndex from './Components/Routing/ShoppingRouting/ShoppingIndex'
import Accordion from './Components/Accordion/Accordion'
import Map from './Components/ArrayMethods/Map'
import Filter  from './Components/ArrayMethods/Filter'
import { UseState } from './Components/Hooks/UseState'
import { Parent } from './Components/Props/Parent'
import { Inline } from './Components/InlineExpression/Inline'
import { EventHandling } from './Components/EventHandling/EventHandling'
import { Forms } from './Components/Forms/Forms'
import { ControlComp } from './Components/ControlUncontrolComp/ControlComp'
import { InnerHtml } from './Components/InnerHtml/InnerHtml'
import { Api } from './Components/API_Request/Api'
import { AxiosDemo2 } from './Components/API_Request/AxiosDemo2'
import { AxiosDemo3 } from './Components/API_Request/AxiosDemo3'
import { DebounceImpl } from './Components/Debounce/DebounceImpl'
import ThemeIndex from './Components/Theme/ThemeIndex'
import GlobalIndex from './Components/GlobalContext/GlobalIndex'
import Employee from './Components/EmployeeList/Employee'
import MealsIndex from './Components/MealsCalculator/MealsIndex'
import State from './Components/FAQs/State_Vs_Props/State'
import Carousal from './Components/FAQs/Carousal/Carousal'
import UseEffect from './Components/Hooks/UseEffect'
import UseMemo from './Components/Hooks/UseMemo'
import UseCallBack from './Components/Hooks/UseCallBack'
import UseMemoDemo from './Components/FAQs/Hooks/UseMemoDemo'

function App() {

  return (
    <>
      {/* <DataBindingComponents/>
      <CollectionBinding/>
      <TableBinding/>
      <NestedDinding/> */}
      {/* <NasaApi/> */}
      {/* <FakeStoreApi/> */}
      {/* <EventBinding/> */}
      {/* <HandleForm/> */}
      {/* <DarkMode/> */}
      {/* <Prop1/> */}
      {/* <FormsValidation/> */}
      {/* <Formik/> */}
      {/* <FormikValidation/> */}
      {/* <FormikYupValidation/> */}
      {/* <ComponentsLifeCycle/> */}
      {/* <UseContext/> */}
      {/* <UseReducer/> */}
      {/* <LikeDisLike/> */}
      {/* <JqueryAjax/> */}
      {/* <AxiosDemo/> */}
      {/* <ShoppingIndex/> */}
      {/* <Accordion/> */}
      {/* <Map/> */}
      {/* <Filter/> */}
      {/* <UseState/> */}
      {/* <Parent/> */}
      {/* <Inline/> */}
      {/* <EventHandling/> */}
      {/* <Forms/> */}
      {/* <ControlComp/> */}
      {/* <InnerHtml/> */}
      {/* <Api/> */}
      {/* <AxiosDemo2/> */}
      {/* <AxiosDemo3/> */}
      {/* <DebounceImpl/> */}
      {/* <MainParent/> */}
      {/* <ThemeIndex/> */}
      {/* <GlobalIndex/> */}
      {/* <Employee/> */}
      {/* <MealsIndex/> */}
      {/* <State/> */}
      {/* <Carousal/> */}
      {/* <UseEffect/> */}
      {/* <UseMemo/> */}
      {/* <UseCallBack/> */}
      <UseMemoDemo/>
    </>
  )
}

export default App
