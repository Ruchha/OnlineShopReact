import React, {FC} from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes/routes';
import { useAppSelector } from '../hooks/redux';



const AppRouter: FC = () => {
  const {isAuth} = useAppSelector(state => state.auth)
  return (
    //<>
    //<Routes>
    //{isAuth
    //?
    //authRoutes.map(({path, Component, children}) =>
    //<Route key={path} path={path} element={<Component/>} > 
    //{children &&
    //  children.map(({ path: nestedPath, Component: NestedComponent }) => (
    //    <Route key={nestedPath} path={nestedPath} element={<NestedComponent />} />
    //  ))}
    //  
    //</Route>)
    //:
    //publicRoutes.map(({path, Component}) =>
    //            <Route key={path} path={path} element={<Component/>} />)
    //            
    //            }
    //</Routes>
    //</>
    isAuth
    ?
    <>
    <Routes>
      {authRoutes.map(({path, Component, children}) =>
        <Route key={path} path={path} element={<Component/>}> 
        {children &&
          children.map(({ path: nestedPath, Component: NestedComponent }) => (
            <Route key={nestedPath} path={nestedPath} element={<NestedComponent />} />
          ))}

        </Route>)}
        <Route path='*' element={<Navigate to='/home' replace />} />
    </Routes>
    </>
    :
    <>
    <Routes>
      {publicRoutes.map(({path, Component}) =>
      <Route key={path} path={path} element={<Component/>} />)}
      <Route path='*' element={<Navigate to='/home' replace />} />
    </Routes>
    </>
  )
  
};

export default AppRouter
