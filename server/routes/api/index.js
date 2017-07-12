import { Router } from 'express'

import users from './users'
import posts from './posts'

var router = Router()

// Add USERS Routes
router.use(users)
router.use(posts)


export default router