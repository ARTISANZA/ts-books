//3D引擎矩阵和矢量计算模块
module Geometry{
    export interface Vector2dInterface{
        toArray(callback:(x: number[]) => void): void;
        length():number;
        normalize();
    }
    export class Vector2d implements Vector2dInterface{
        private _x: number;
        private _y: number;
        constructor(x:number, y:number){
            this._x = x;
            this._y = y;
        }
        toArray(callback: (x: number[]) => void):void{
            callback([this._x, this._y]);
        }
        length(): number{
            return Math.sqrt(this._x * this._x + this._y * this._y);
        }
        normalize(){
            var len = 1 / this.length();
            this._x *= length;
            this._y *= length;
        }
    }
}
//实例化和调用
var vector: Geometry.Vector2dInterface = new Geometry.Vector2d(2,3);
vector.normalize();
vector.toArray(function(vectorAsArray:number[]){
    alert(' x :' + vectorAsArray[0] + ' y :' + vectorAsArray[1]);
});