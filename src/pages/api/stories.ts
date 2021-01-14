import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../lib/firebase';

// This will export all the stories
export default function getAllStories(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(500).json({
      message: 'need Get requsts only'
    })
  }

  const pmz = async (docs:any)=>{
    let temarr = [];
    await docs.forEach((doc:any) => {
      let temp = {
        doc_id: doc.id,
        data: doc.data()
      }
      temarr.push(temp);
    });
    return temarr;
  }

  db.collection('stories')
    .get()
    .then((docs) => {
      return pmz(docs);
    })
    .then((docs) => {
      res.status(200).json({
        data: [docs],
        error_state: false,
        error_message: ''
      });
    }).catch((error) => {
      res.status(500).json({
        data: [],
        error_state: true,
        error_message: error
      });
    });
}