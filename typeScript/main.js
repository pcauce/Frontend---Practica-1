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
const section = document.querySelector(".section");
(() => __awaiter(void 0, void 0, void 0, function* () {
    section.innerHTML = yield (yield fetch("html/FrontEnd.html")).text();
}))();
document.body.addEventListener("click", (event) => __awaiter(void 0, void 0, void 0, function* () {
    const link = event.target.closest("[data-url]");
    if (link) {
        section.innerHTML = yield (yield fetch(`${link.dataset.url}`)).text();
    }
}));
