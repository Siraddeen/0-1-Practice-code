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
function insertUser(username, password, firstname, lastname, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield prisma.user.create({
            data: {
                username,
                password,
                firstname,
                lastname,
                email,
            },
        });
        console.log(response);
    });
}
//insertUser("on", "pas1", "fisdr", "sedsac", "edmai.com");
function getTodosAndDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        /* const response1 = await prisma.todo.findMany({
          where: {
            user_id: userId,
          },
        });
        console.log(response1);
        
        this will give values of id 1
               we are trying to generate  both todo & user detail together
        */
        /*
        const resd = await prisma.todo.create({
          data: {
            user_id: 1,
            title: "keane ie",
            description: "hane feij lkeare noew",
          },
        });
      
      
        created dummy data
        */
        const response1 = yield prisma.todo.findMany({
            where: {
                user_id: userId,
            },
            select: {
                id: true,
                title: true,
                user: true,
                description: true,
            },
        });
        console.log(response1);
    });
}
getTodosAndDetails(1);
