import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { phoneNumber, type, address, position, duration, schedule, salary, salaryPayType, salaryPayday, warning, additional } = req.body;

    // Get the employer UID from your authentication/session mechanism
    const employer = req.headers['employer-uid'];

    try {
      // Find the user by phone number
      const user = await prisma.user.findUnique({
        where: { phone: phoneNumber },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Create the contract
      const newContract = await prisma.contract.create({
        data: {
          employer,
          type,
          address,
          number: phoneNumber,
          position,
          duration,
          schedule,
          salary,
          salaryPayType,
          salaryPayday,
          warning,
          additional,
          status: 'Баталгаажаагүй',
          employeeId: user.uid,
        },
      });

      res.status(201).json(newContract);
    } catch (error) {
      console.error('Error creating contract:', error);
      res.status(500).json({ error: 'Failed to create contract' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
