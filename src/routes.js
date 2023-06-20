import { Router } from "express";
import { createAll, insertRegister, insertGames, insertCodes, updateRegister, updateGames, updateCodes, selectRegister, selectRegisterId, selectGames, selectGamesId, selectCodes, selectCodesId, deleteRegister, deleteGames, deleteCodes } from './Controller/controller.js';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando..."
    })
})

createAll();
//register
router.get('/registers', selectRegister)
router.get('/register', selectRegisterId)
router.post('/register', insertRegister)
router.put('/register', updateRegister)
router.delete(`/register/idRegister`, deleteRegister);


//games
router.get('/buys', selectGames)
router.get('/buy', selectGamesId)
router.post('/buy', insertGames)
router.put('/buy', updateGames)
router.delete('/buy', deleteGames)


//codes
router.get('/codes', selectCodes)
router.get('/code', selectCodesId)
router.post('/code', insertCodes)
router.put('/code', updateCodes)
router.delete('/code', deleteCodes)

export default router;