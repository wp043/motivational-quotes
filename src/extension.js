"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
function activate(context) {
    let motivationalQuotes = [
        "Keep pushing your limits!",
        "It's not a bug; it's an undocumented feature.",
        "You're doing great!",
        "Dream big, code bigger!",
        "Every line of code counts!",
        "Believe in yourself and all that you are.",
        "Your limitation—it's only your imagination.",
        "Push yourself, because no one else is going to do it for you.",
        "Learn as if you will live forever, live like you will die tomorrow.",
        "When you change your thoughts, remember to also change your world.",
        "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        "It is better to fail in originality than to succeed in imitation.",
        "The road to success and the road to failure are almost exactly the same.",
        "Software and cathedrals are much the same — first we build them, then we pray.",
    ];
    let quote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    let statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.text = quote;
    statusBarItem.show();
    context.subscriptions.push(statusBarItem);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map