import * as vscode from 'vscode';

let statusBarItem: vscode.StatusBarItem;
let motivationalQuotes: string[] = [];

function updateQuote() {
    const configQuotes = vscode.workspace.getConfiguration().get<string[]>('motivationalQuotes.userQuotes') || [];
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

    if (configQuotes.length > 0) {
        motivationalQuotes = motivationalQuotes.concat(configQuotes);
    }

    const quote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    statusBarItem.text = quote;
    statusBarItem.show();
}

export function activate(context: vscode.ExtensionContext) {
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    updateQuote();

    let disposable = vscode.commands.registerCommand('motivationalQuotes.shuffleQuote', () => {
        updateQuote();
    });

    context.subscriptions.push(disposable);
    context.subscriptions.push(statusBarItem);
}

export function deactivate() {
    if (statusBarItem) {
        statusBarItem.dispose();
    }
}