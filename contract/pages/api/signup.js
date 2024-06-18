// pages/api/signup.js
import { PrismaClient } from '@prisma/client';
import { signup } from '@/firebase/authService';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { companyName, email, phoneNumber, password, role } = req.body;

    try {
      const userCredential = await signup(email, password);
      const user = userCredential.user;
      const newUser = await prisma.user.create({
        data: {
          uid: user.uid,
          role,
          lastName: '',
          firstName: companyName,
          email,
          password, // In real applications, store hashed passwords
          phone: phoneNumber,
        },
      });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Error creating user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
