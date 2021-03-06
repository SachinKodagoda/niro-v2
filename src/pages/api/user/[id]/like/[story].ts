import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../../lib/firebase';
import _ from 'lodash';

// This is like handling api
export default async function dislikeAstory(req: NextApiRequest, res:NextApiResponse ){

  const document = db.collection('stories').doc(req.query.story.toString());
  const output1 = await document.get();
  const custom_arr = await _.pull(output1.data().liked_people,req.query.id.toString());
  const custom_arr2 = await _.concat(custom_arr, req.query.id.toString());
  await document.update({
      liked_people: custom_arr2
  }).then(() => {
    res.status(200).json({
      data: [],
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


