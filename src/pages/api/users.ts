import { NextApiRequest, NextApiResponse } from 'next';

// To get all users
export default function getAllUsers(req: NextApiRequest, res:NextApiResponse ){
  if(req.method !== 'GET'){
    res.status(500).json({
      message: 'need Get requsts only'
    })
  }
  res.json([
    {
      id: 1,
      name: 'sachin'
    },
    {
      id: 2,
      name: 'abinaya'
    }
    ])
}