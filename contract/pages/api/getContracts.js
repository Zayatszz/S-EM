// pages/api/getContracts.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const contracts = await prisma.contract.findMany({
        include: {
          employee: true,
        },
      });
      res.status(200).json(contracts);
    } catch (error) {
      console.error('Error fetching contracts:', error);
      res.status(500).json({ error: 'Failed to fetch contracts' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
