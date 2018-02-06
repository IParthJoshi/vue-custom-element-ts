import Vue from "vue";
import component from "vue-class-component";

@component
export default class ExampleComponent extends Vue{
    msg: string = "Vue in Typescript!"
}