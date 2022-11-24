import { Route, Routes } from 'react-router-dom';
import TransactionDetailView from '../features/transaction/transactionDetail/TransactionDetailView';
import TransactionListView from '../features/transaction/transactionList/TransactionListView';
import AppNavigation from './AppNavigation';
import ExposedPage from './ExposedPage';
import ProtectedPage from './ProtectedPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<ExposedPage />} />
      <Route element={<ProtectedPage />}>
        <Route path="transaction" element={<AppNavigation />}>
          <Route index element={<TransactionListView />} />
          <Route path=":trxId" element={<TransactionDetailView />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
