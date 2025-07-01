        /**
         * <div id = "parent">
         *     <div id="child">
         *        <h1> hey i am there</h1>
         *        <h2>hey i am not here</h2>
         *     </div>
         *      <div id="child">
         *        <h1> hey i am there</h1>
         *        <h2>hey i am not here</h2>
         *     </div>
         * </div>
         * 
         * 
         * 
         * 
         * 
         */
        
        
        
        const heading = React.createElement(
            "h1", 
            { id: "heading",xyz:"root1"} ,
            "Hello Rohith!!"
        );

        const divdata = React.createElement("div", {id:"parent"},[ 
            React.createElement("div",{id:"child"},
                [React.createElement("h1",{},"I AM h1 tag")
                ,React.createElement("h2",{},"I AM h2 tag")
                ]),
              React.createElement("div",{id:"child2"},
                [React.createElement("h1",{},"I AM h1 tag")
                ,React.createElement("h2",{},"I AM h2 tag")
                ])]);
        console.log(divdata);
        

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(divdata);