"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// async function insertUser(
//   userName: string,
//   password: string,
//   firstName: string,
//   lastName: string
// ) {
//   const res = await prisma.user.create({
//     data: {
//       email: userName,
//       password,
//       firstName,
//       lastName,
//     },
//     select: {
//       id: true,
//       firstName: true,
//     },
//   });
//   console.log(res);
// }
// insertUser("no21nod@yo.com", "pass33", "kiarn", "sam");
// // // -----------------------------------------------------------------update------------------------
// interface UpdateParams {
//   firstName: string;
//   lastName: string;
// }
// async function updateUser(
//   username: string,
//   { firstName, lastName }: UpdateParams
// ) {
//   const res = await prisma.user.update({
//     where: { email: username },
//     data: {
//       firstName,
//       lastName,
//     },
//   });
//   console.log(res);
// }
// updateUser("no21nod@yo.com", { firstName: "homeLANDer", lastName: "okenaaa" });
// //-------------------------------------get data-------------------------
function getUser(userName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = prisma.user.findFirst({
            where: {
                email: "no21nod@yo.com",
            },
        });
        console.log(res);
    });
}
getUser("homeLANDer");
