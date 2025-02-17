// External Styles (this is probably not the best way to load this?)
import '@thewca/wca-components/dist/index.esm.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Events from './pages/events'
import HomePage from './pages/home'
import Register from './pages/register'
import RegistrationAdministration from './pages/registration_administration'
import RegistrationEdit from './pages/registration_edit'
import Registrations from './pages/registrations'
import Schedule from './pages/schedule'
import App from './ui/App'
import Competition from './ui/Competition'
import CustomTab from './ui/CustomTab'
import FlashMessage from './ui/messages/flashMessage'
import PermissionsProvider from './ui/providers/PermissionsProvider'
import UserProvider from './ui/providers/UserProvider'
import PageTabs from './ui/Tabs'

const router = createBrowserRouter([
  {
    path: '/competitions',
    element: (
      <App>
        <FlashMessage />
        <UserProvider>
          <Outlet />
        </UserProvider>
      </App>
    ),
    children: [
      {
        path: '/competitions/:competition_id',
        element: (
          <Container>
            <Competition>
              <PermissionsProvider>
                <PageTabs />
                <Outlet />
              </PermissionsProvider>
            </Competition>
          </Container>
        ),
        children: [
          {
            path: '/competitions/:competition_id',
            element: <HomePage />,
          },
          {
            path: '/competitions/:competition_id/events',
            element: <Events />,
          },
          {
            path: '/competitions/:competition_id/schedule',
            element: <Schedule />,
          },
          {
            path: '/competitions/:competition_id/register',
            element: <Register />,
          },
          {
            path: '/competitions/:competition_id/tabs/:tab_id',
            element: <CustomTab />,
          },
          {
            path: '/competitions/:competition_id/registrations',
            element: <Registrations />,
          },
          {
            path: '/competitions/:competition_id/:user_id/edit',
            element: <RegistrationEdit />,
          },
          {
            path: '/competitions/:competition_id/registrations/edit',
            element: <RegistrationAdministration />,
          },
        ],
      },
    ],
  },
])

// Render the React component into the body of the monolith
const root = createRoot(document.querySelector('#registration-app'))
root.render(<RouterProvider router={router} />)
