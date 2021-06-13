import { Request, Response, NextFunction } from "express";
import { body, validationResult } from 'express-validator';


const validateTaskBody  = async (req: Request, res: Response, next: NextFunction) => {
    // username must be an email
  body('taskName').isLength({min: 3 }),
  // password must be at least 5 chars long
  body('dueDate').isAfter(),
  body('taskStatus').isInt({ min: 1, max: 3 }),
  (req: Request, res: Response) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
        next();
    }
  }

}
export default validateTaskBody;
