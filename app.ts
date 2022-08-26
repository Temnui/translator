declare const translate: any;
declare const apiKey: string;

const version = '0.0.1' as string

translate.engine = "google";
translate.key = apiKey; // key we get from settings.js

document.querySelector("#translate").addEventListener("submit", function(e) {
    e.preventDefault();
    onSubmit().then(r => {
        return
    });
});

async function onSubmit() {
    let text = (<HTMLInputElement>document.querySelector('#enText')).value;
    (<HTMLInputElement>document.querySelector('#ruText')).value = await getTranslation(text)
}

async function getTranslation(originalText, originalLanguage = 'en', translationLanguage = 'ru') {
    return await translate(originalText, {from: originalLanguage, to: translationLanguage})
}

console.log(version)