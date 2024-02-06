// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../lib/prisma";

export default async function handle(req, res) {

  // const products = await prisma.product.findMany();

  const experimentalProducts = await prisma.products.findMany();

  const products = await "Replace this with database items";
  res.json(products);
}
