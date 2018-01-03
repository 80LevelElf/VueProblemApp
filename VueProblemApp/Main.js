define(["require", "exports", "vue"], function (require, exports, vue_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class MainController {
        start() {
            let vue = new vue_1.default({
                el: "#data-div",
                data: {
                    someText: "Text"
                }
            });
        }
    }
    exports.MainController = MainController;
});
//# sourceMappingURL=Main.js.map