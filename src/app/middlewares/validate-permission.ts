import { Request, Response, NextFunction } from "express";
import axios from "axios";

class ValidatePermissionMiddleware {

  async validate(req: Request, res: Response, next: NextFunction, permission?: string): Promise<any> {

    const applicationId = req.body.applicationId || req.query.applicationId || undefined;

    if(req.headers.authorization) {
      
      if(!applicationId)
        return res.status(400).json({ error: 'Request query is missing application_id parameter' });
        
      if(!permission)
        return res.status(400).json({ error: 'Permission not specified for this route' });
    }

    else if(!req.headers.authorization && !req.headers.clientauthorization)
      return res.status(401).json({ error: 'Credentials not provided' });
    
    try {
      const response: any = await axios.get(
        `${process.env.PASSPORT_API_URL}/authorization${req.headers.clientauthorization ? '/client' : '?application_id=' + applicationId + '&permission_name=' + permission }`,
        {
          headers: {
            authorization: req.headers.authorization || req.headers.clientauthorization
          },
          data: {
            application_id: applicationId,
            permission_name: permission
          }
        }
      );

      if(response.status === 200)
        next();
      else 
        res.status(401).json({ error: 'Invalid or expired token' });      
    }
    catch(e) {
      res.status(401).json({ error: 'Unauthorized'});
    }
    
  }

}

export default new ValidatePermissionMiddleware().validate;