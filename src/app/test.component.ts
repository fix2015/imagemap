import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    template: `
    <canvas id="demoCanvas" style="border: 1px solid black;"></canvas>
`
})
export class TestComponent implements OnInit {

    constructor() { }

    ngOnInit() {

        // var stage = new createjs.Stage('demoCanvas');
        // var shape = new createjs.Shape();
        // shape.graphics.beginFill('red').drawRect(0, 0, 120, 120);
        // stage.addChild(shape);
        // stage.update();
    }

}