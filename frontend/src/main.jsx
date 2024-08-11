import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import { MainDrawerContextProvider } from './context/MainDrawerContext.jsx'
import { CommonModalContextProvider } from './context/CommonModalContext.jsx'
import { DataContextProvider } from './context/DataContext.jsx'
import { ClientDataContextProvider } from './context/ClientDataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeContextProvider>
          <MainDrawerContextProvider>
            <CommonModalContextProvider>
              <DataContextProvider>
                <ClientDataContextProvider>
                    <App />
                  </ClientDataContextProvider>
                </DataContextProvider>
            </CommonModalContextProvider>
          </MainDrawerContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
