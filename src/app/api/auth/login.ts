import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function POST(req: NextRequest) {
  const header = headers();
  const formData = await req.json();
  console.log(formData);
  // await prisma.$connect();
  // const user = await prisma.user.findFirst({
  //   where: {
  //     email: formData.email,
  //   },
  // });
  // if (!user) {
  //   console.log("no user found");
  //   return;
  // }
  // const hashedPassword = user.password;
  // const result = await bcrypt.compare(formData.password, hashedPassword);
  // if (result) {
  //   const payload = { email: formData.email };
  //   const token = jwt.sign(payload, tokenSecret, { expiresIn: 60 * 60 });
  //   cookies().set({
  //     name: "jwt",
  //     value: token,
  //     path: "/",
  //   });
  //   redirect("./");
  // }
  // console.log("login failed");
  // return;
}
