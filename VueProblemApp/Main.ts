import Vue from "vue"

export class MainController {
    public start() {
        let vue = new Vue({
            el: "#data-div",
            data: {
                someText: "Text"
            }
        });
    }
}
