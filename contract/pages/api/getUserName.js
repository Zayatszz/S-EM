import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { uid } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: { uid },
        select: { firstName: true, lastName: true },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const userName = `${user.firstName} ${user.lastName}`;

      res.status(200).json({ name: userName });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user name' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
