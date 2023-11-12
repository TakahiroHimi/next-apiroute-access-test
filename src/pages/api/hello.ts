// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('*********************** req ***********************')
  console.log('origin', req.headers.origin)
  console.log('referer', req.headers.referer)
  console.log('all', req.headers)
  console.log('*********************** req ***********************')

  res.status(200).json({ name: 'John Doe' })
}
