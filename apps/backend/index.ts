import express from "express";
import prisma from "../../packages/db/index";
const app = express();

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  console.log(users);
  res.json(users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});