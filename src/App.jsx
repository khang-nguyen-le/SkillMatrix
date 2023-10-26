import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './component/Layout/AppLayout';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import CreateForm from './pages/CreateForm';
import { AppProvider } from './context/appContext';
import NameDescForm from './component/Forms/NameDescForm';
import DetailsForm from './component/Forms/DetailsForm';
import ConfirmationForm from './component/Forms/ConfirmationForm';
import RespondentsPage from './pages/RespondentsPage';
import PersonalResponsePage from './pages/PersonalResponsePage';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="forms" />} />
              <Route path="forms" element={<Home />} />
              <Route element={<CreateForm />}>
                <Route path="forms/create/info" element={<NameDescForm />} />
                <Route path="forms/create/details" element={<DetailsForm />} />
                <Route
                  path="forms/create/confirmation"
                  element={<ConfirmationForm />}
                />
              </Route>
              <Route path="forms/:id" element={<RespondentsPage />} />
              <Route
                path="respondent/forms/:id"
                element={<PersonalResponsePage />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}
