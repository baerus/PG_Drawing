/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        alert('ready');

        var paper = Raphael("mygraph", 640, 480);
        alert('paper: ' + paper);
        var diagramAxes = " M 50 30 l 0 200 l 200 0 M 50 200";
        var l1 = " L 80 170";
        var l2 = " L 140 140";
        var l3 = " L 200 70";
        var l4 = " L 220 65";
        var line = paper.path (diagramAxes + l1 + l2 + l3 + l4);
        alert('line: ' + line);
        line.attr ("stroke-width", "3");
        line.attr ("stroke", "#000");

        var blue = "#02F";
        paper.text(25, 200, "31323").attr({fill : blue});
        paper.text(25, 170, "31358").attr({fill : blue});
        paper.text(25, 140, "31431").attr({fill : blue});
        paper.text(25, 70, "31478").attr({fill : blue});

        var orange = "#F80";
        paper.text(70, 200, "206,91").attr({fill : orange});
        paper.text(70, 170, "213,55").attr({fill : orange});
        paper.text(70, 140, "235,17").attr({fill : orange});
        paper.text(70, 70, "243,53").attr({fill : orange});

        paper.text(50, 250, "21.09.13");
        paper.text(80, 270, "28.09.13");
        paper.text(140, 250, "03.10.13");
        paper.text(200, 270, "19.10.13");
        paper.text(220, 250, "30.10.13");
        alert('end');
    }
};
