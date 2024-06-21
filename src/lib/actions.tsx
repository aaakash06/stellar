"use server";

import { cookies } from "next/headers";
import bcrypt from "bcrypt";
const saltRounds = 10;
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import * as jwt from "jsonwebtoken";
const prisma = new PrismaClient();
const tokenSecret = "password";

export async function register(formData: {
  email: string;
  password: string;
  name: string;
}) {
  await prisma.$connect();
  const hashedPassword = bcrypt.hashSync(formData.password, saltRounds);

  const createdUser = await prisma.user.create({
    data: {
      name: formData.name,
      email: formData.email,
      password: hashedPassword!,
    },
  });

  redirect("./");
}
export async function login(formData: { email: string; password: string }) {
  await prisma.$connect();
  const user = await prisma.user.findFirst({
    where: {
      email: formData.email,
    },
  });
  if (!user) {
    console.log("no user found");
    return;
  }
  const hashedPassword = user.password;
  const result = await bcrypt.compare(formData.password, hashedPassword);
  if (result) {
    const payload = { email: formData.email };
    const token = jwt.sign(payload, tokenSecret, { expiresIn: 60 * 60 });
    cookies().set({
      name: "jwt",
      value: token,
      path: "/",
    });
    redirect("./");
  }
  console.log("login failed");
  return;
}
