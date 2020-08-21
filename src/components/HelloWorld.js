//Functional or stateless components. Props can be accessed directly.

//  +++Function Component+++
import React from 'react'

function HelloWorld(props) {
    return (
        <h1>
          Hello {props.name}
        </h1>
    )
}

export default HelloWorld
//------------------------------------------
//  +++Function Component with default export at top
// import React from 'react'

// export default function HelloWorld(props) {
//     return (
//         <h1>
//            Hello {props.name}
//         </h1>
//     )
// }





//  +++ Class component export at top
// import React, { Component } from 'react'

// export default class HelloWorld extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>
//                     Hello {this.props.name}
//                     </h1>
//             </div>
//         )
//     }
// }




//   +++Class component+++
// import React from "react";

// class HelloWorld extends React.Component {
//   render() {
//     return (
//       <h1>
//         Hello {this.props.name}

//       </h1>
//     );
//   }
// }
// export default HelloWorld;
