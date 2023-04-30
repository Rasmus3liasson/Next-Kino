import { body,validationResult } from "express-validator";
export default function validateReviews(req,res){
  //const body = req.body
  body('author').isLength({min: 3}),
  body('comment').isLength({min: 3}),
  body('rating').isInt({min:0, max:5}),
  async (req,res) => {
    //Are there any validation errors
    const errors = validationResult(req);

    //If validation errors, sen status 400 and errors array
    if (!errors.isEmpty()){
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    //If no errors send 200 success 
    res.status(200).json({
      success: true,
      message: 'Review posted successfully'
    });
}} 
