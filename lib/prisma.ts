import { PrismaClient } from "@/app/generated/prisma"; // ✅ match your output path

const prisma = new PrismaClient();

export { prisma };
