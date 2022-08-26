var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const version = '0.0.1';
translate.engine = "google";
translate.key = apiKey;
document.querySelector("#translate").addEventListener("submit", function (e) {
    e.preventDefault();
    onSubmit().then(r => {
        return;
    });
});
function onSubmit() {
    return __awaiter(this, void 0, void 0, function* () {
        let text = document.querySelector('#enText').value;
        document.querySelector('#ruText').value = yield getTranslation(text);
    });
}
function getTranslation(originalText, originalLanguage = 'en', translationLanguage = 'ru') {
    return __awaiter(this, void 0, void 0, function* () {
        return yield translate(originalText, { from: originalLanguage, to: translationLanguage });
    });
}
console.log(version);
