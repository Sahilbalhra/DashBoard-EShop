import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import List from './Pages/list/List'
import Login from './Pages/login/Login'
import New from './Pages/New/New'
import Single from './Pages/Single/Single'
import { productInputs, userInputs } from "./formSource";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
        </Route>
        <Route path="products">
          <Route index element={<List />} />
          <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
        </Route>
      </Route>
    </Routes>
  )
}

export default App

