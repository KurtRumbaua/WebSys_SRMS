import { Router } from "express";
import { addTransactionAPI, getAllTransactionsAPI, getTransactionAPI, removeAllTransactionsAPI, removeTransactionAPI, updateTransactionAPI} from "../controllers/transactionController";
const router = Router();

router.post('/create', addTransactionAPI);
router.get('/view/all', getAllTransactionsAPI);
router.get('/view', getTransactionAPI);
router.delete('/delete', removeTransactionAPI);
router.delete('/delete/all', removeAllTransactionsAPI);
router.put('/update', updateTransactionAPI);
export default router;