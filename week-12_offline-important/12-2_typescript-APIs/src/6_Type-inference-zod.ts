// we use zod for runtime validation

/*
import { z } from "zod";
import express from "express";

const app = express();

const userProfileSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.string().min(18).optional(),
});

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody = req.body;
  if (!success) {
    res.status(411).json({});
    return;
  }
  res.json({ msg: "user updated" });
});

app.listen(3000);
*/

// this is our actual code here we use zod for validation   it would be great some how if we can extract the schema of zod & use for type check so then we use

import { z } from "zod";
import express from "express";

const app = express();

const userProfileSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.string().min(18).optional(),
});

type finalSchema = z.infer<typeof userProfileSchema>; // this line will provide you type check

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: finalSchema = req.body;
  if (!success) {
    res.status(411).json({});
    return;
  }
  res.json({ msg: "user updated" });
});

app.listen(3000);
