import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './component/Layout/AppLayout';
import { AppProvider } from './context/appContext';
import NameDescForm from './component/Forms/NameDescForm';
import DetailsForm from './component/Forms/DetailsForm';
import ConfirmationForm from './component/Forms/ConfirmationForm';
import { DomainsProvider } from './context/domainContext';
import SurveyFormTabs from './component/SurveyForm/SurveyFormTabs';
import AssinedSurveyList from './component/SurveyForm/AssignedSurveyList';
import CreatedSurveyList from './component/SurveyForm/CreatedSurveyList';
import Domain from './component/Domain/Domain';
import SpinnerFullPage from './component/Spinner/SpinnerFullPage';
import CreatedFormPage from './pages/CreatedFormPage';
import { QuestionsProvider } from './context/questionContext';

const Home = lazy(() => import('./pages/Home'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const CreateForm = lazy(() => import('./pages/CreateForm'));
const PersonalResponsePage = lazy(() => import('./pages/PersonalResponsePage'));

export default function App() {
  return (
    <>
      <GlobalStyles />
      <QuestionsProvider>
        <AppProvider>
          <DomainsProvider>
            <BrowserRouter>
              <Suspense fallback={<SpinnerFullPage />}>
                <Routes>
                  <Route element={<AppLayout />}>
                    <Route
                      index
                      element={<Navigate replace to="forms/assigned" />}
                    />
                    <Route element={<Home />}>
                      <Route element={<SurveyFormTabs />}>
                        <Route
                          path="forms/assigned"
                          element={<AssinedSurveyList />}
                        />
                        <Route
                          path="forms/created"
                          element={<CreatedSurveyList />}
                        />
                        <Route
                          path="forms/drafts"
                          element={<CreatedSurveyList />}
                        />
                        <Route path="forms/domains" element={<Domain />} />
                      </Route>
                    </Route>
                    <Route element={<CreateForm />}>
                      <Route
                        path="forms/create/info"
                        element={<NameDescForm />}
                      />
                      <Route
                        path="forms/create/details"
                        element={<DetailsForm />}
                      />
                      <Route
                        path="forms/create/confirmation"
                        element={<ConfirmationForm />}
                      />
                    </Route>
                    <Route
                      path="forms/created/:id"
                      element={<CreatedFormPage />}
                    />
                    <Route
                      path="forms/:id/:id"
                      element={<PersonalResponsePage />}
                    />
                    <Route path="*" element={<PageNotFound />} />
                  </Route>
                </Routes>
              </Suspense>
            </BrowserRouter>
          </DomainsProvider>
        </AppProvider>
      </QuestionsProvider>
    </>
  );
}
