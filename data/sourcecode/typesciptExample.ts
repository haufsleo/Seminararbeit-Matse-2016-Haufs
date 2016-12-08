interface IExampleInterface {
    x: number;
    y: string;
}
var a: number = 23;
var b: string = "Text";
var myExample: IExampleInterface = {
    x: a,
    y: b
};
var myFunc = (v1: number, v2: number): number => {
    return v1 + v2;
};